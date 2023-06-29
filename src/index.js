const { isABsolute, isRelative, isValid, isFileOrDirectory, readContent, readDirectory, isMarkdown } = require('./path');

function analyzeRoute(route) {
   let absolute = isABsolute(route);
   const relative = isRelative(route);
   const valid = isValid(route);
   const fileOrDirectory = isFileOrDirectory(route);
   const md = isMarkdown(route)

   if (absolute === false) {
      let newRoute = relative;
       absolute = isABsolute(newRoute);
       console.log(newRoute);
   } 

  if ( absolute === true && valid === true ) {
   if (fileOrDirectory === 'Es un Archivo' && md === true) {
    return readContent(route);
  } else if (fileOrDirectory === 'Es un Directorio') {
    return readDirectory(route);
  }
}
}

module.exports = {
    analyzeRoute
}
 console.log(analyzeRoute('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/'))
