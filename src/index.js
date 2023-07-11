const { isABsolute, isRelative, isValid, isFileOrDirectory, readFile, readDirectory, isMarkdown } = require('./path');



function analyzeRoute(route) {
  return new Promise((resolve, reject) => {
    let absolute = isABsolute(route);
    const relative = isRelative(route);
    const valid = isValid(route);

    if (!absolute) {
      let newRoute = relative;
      absolute = isABsolute(newRoute);
    }

    if (absolute && valid) {
      isFileOrDirectory(route)
        .then((fileOrDirectory) => {
          const md = isMarkdown(route);
          if (fileOrDirectory === 'Es un Archivo' && md === true) {
            resolve(readFile(route));
          } else if (fileOrDirectory === 'Es un Directorio') {
            resolve(readDirectory(route)); 
          } else {
            reject('Ruta inválida o no es un archivo markdown');
          }
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject('Ruta inválida o no es un archivo markdown');
    }
  });
}


module.exports = {
    analyzeRoute
}
