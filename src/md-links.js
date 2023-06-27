const { isABsolute, isRelative, isValid, isMarkdown } = require("./path");

function mdLinks(route) {
   let abs = isABsolute(route);
   const rel = isRelative(route);
   const val = isValid(route);
   const md = isMarkdown(route);
   let result;

   if (abs == false) {
      let newRoute = rel;
       abs = isABsolute(newRoute);
       console.log(newRoute);
   } 

   if ( abs === true && val === true && md === true ) {
      result = true;
   } 
   else {
      result = false;
   }
    
    return result;
  
}

console.log(mdLinks('/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/lili.md'));

//C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/lili.md