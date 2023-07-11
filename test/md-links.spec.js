const { mdLinks } = require('../src/md-links');
const { getLinksStatus, extractLinks, isFileOrDirectory } = require('../src/path')




describe('mdLinks', () => {
  it('debería retornar una promesa que se resuelve con un array de objeto', (done) => {
    const route = 'C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/testFile/lili.md';
    const options = { validate: true }; 
    const result = mdLinks(route, options);
    expect(result).resolves.toEqual([
       {
      text: 'Arreglos',
      href: 'https://curriculum.---',
      file: 'C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/testFile/lili.md',
      status: null,
      message: 'FAIL'
    },
    {
      text: 'Array - MDN',
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      file: 'C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/testFile/lili.md',
      status: 200,
      message: 'OK'
    },
    {
      text: 'Objetos en JavaScript',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      file: 'C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/testFile/lili.md',
      status: 200,
      message: 'OK'
    }
  ]
    ).then(done);
  });
});



describe('mdLinks', () => {
  it('debería retornar una promesa que se resuelve con un array de objeto', (done) => {
    const route = './testFile/lili.md';
    const options = { validate: false }; 
    const result = mdLinks(route, options);
    expect(result).resolves.toEqual([
      {
        text: 'Arreglos',
        href: 'https://curriculum.---',
        file: './testFile/lili.md',
      },
      {
        text: 'Array - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
        file: './testFile/lili.md',
      },
      {
        text: 'Objetos en JavaScript',
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
        file: './testFile/lili.md',
      }
    ]).then(done);
  });
});


describe('mdLinks', () => {
  it('debería retornar un array con los archivos', (done) => {
    const route = './testFile';
    const options = { validate: true };
    const result = mdLinks(route, options);
    expect(result).resolves.toEqual(
      [ 'doc.txt', 'lili.md' ]
      ).then(done);
    })
  });



  describe('mdLinks', () => {
    it('debería retornar error', (done) => {
      const route = './teeeeestFile';
      const options = { validate: true };
      const result = mdLinks(route, options);
      result.catch((error) => {
        expect(error).toEqual('Ruta invalida o no es un archivo markdown');
        done();
      });
    });
  });



describe('getLinksStatus', () => {
  it('debería retornar el link con su status y su statusText', () => {
    const url = 'http://www.google.com'; 
    return getLinksStatus(url).then((result) => {
      expect(result).toEqual({
        status: 200,
        message: 'OK'
      });
    });
  });
});



describe('extractLinks', () => {
  it('debería retornar text, href y file', () => {
    const route = './testFile/lili.md';
    const content = '[Arreglos](https://curriculum.---)\n[Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)\n[Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)';
    const result = extractLinks(route, content);
    expect(result).toEqual([
      {
        text: 'Arreglos',
        href: 'https://curriculum.---',
        file: './testFile/lili.md',
      },
      {
        text: 'Array - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
        file: './testFile/lili.md',
      },
      {
        text: 'Objetos en JavaScript',
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
        file: './testFile/lili.md',
      }
    ]);
  });
});