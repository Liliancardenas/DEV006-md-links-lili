const { isABsolute, isRelative, isValid, fileOrDirectory, readDirectory, readContent, isMarkdown } = require("./path");

function analyzeRoute(route) {
   let abs = isABsolute(route);
   const rel = isRelative(route);
   const val = isValid(route);
   let result;

   if (abs == false) {
      let newRoute = rel;
       abs = isABsolute(newRoute);
       console.log(newRoute);
   } 

   if ( abs === true && val === true ) {
      result = true;
   } 
   else {
      result = false;
   }
    
    return result;
  
}

console.log(analyzeRoute('/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/lili.md'));

//C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/lili.md