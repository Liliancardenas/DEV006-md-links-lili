const { mdLinks } = require('../src/md-links');

const route = './testFile/lili.md';
const options = { validate: true };

describe('mdLinks', () => {
  it('debería retornar una promesa que se resuelve con un array de objeto', (done) => {
    const result = mdLinks(route, options);
    expect(result).resolves.toEqual([
      {
        text: 'Arreglos',
        href: 'https://curriculum.---',
        file: './testFile/lili.md',
        status: null,
        message: 'FAIL'
      },
      {
        text: 'Array - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
        file: './testFile/lili.md',
        status: 200,
        message: 'OK'
      },
      {
        text: 'Objetos en JavaScript',
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
        file: './testFile/lili.md',
        status: 200,
        message: 'OK'
      }
    ]).then(done);
  });
});









