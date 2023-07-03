const { isABsolute, isRelative, isValid, isFileOrDirectory, readFile, readDirectory, isMarkdown } = require('./path');

function analyzeRoute(route) {
   let absolute = isABsolute(route);
   const relative = isRelative(route);
   const valid = isValid(route);
   const fileOrDirectory = isFileOrDirectory(route);
   const md = isMarkdown(route)

   if (absolute === false) {
      let newRoute = relative;
       absolute = isABsolute(newRoute);
   } 

  if ( absolute === true && valid === true ) {
   if (fileOrDirectory === 'Es un Archivo' && md === true) {
    return readFile(route);
  } else if (fileOrDirectory === 'Es un Directorio') {
    return readDirectory(route);
  }
} 
return 'Ruta invalida o no es un archivo .md';
}
//console.log(analyzeRoute('testFile/lili.md'))



module.exports = {
    analyzeRoute
}


