const { isABsolute, isRelative, isValid, isFileOrDirectory, readFile, readDirectory, isMarkdown } = require('./path');

function analyzeRoute(route) {
  return new Promise((resolve, reject) => {
    let absolute = isABsolute(route);
    const relative = isRelative(route);
    const valid = isValid(route);
    const fileOrDirectory = isFileOrDirectory(route);
    const md = isMarkdown(route);

    if (absolute === false) {
      let newRoute = relative;
      absolute = isABsolute(newRoute);
    }

    if (absolute === true && valid === true) {
      if (fileOrDirectory === 'Es un Archivo' && md === true) {
        resolve(readFile(route));
      } else if (fileOrDirectory === 'Es un Directorio') {
        resolve(readDirectory(route)); 
      }
    }

    reject('Ruta inválida o no es un archivo markdown');
  });
}


module.exports = {
    analyzeRoute
}


