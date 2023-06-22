const { isABsolute, isRelative, isValid, isMarkdown } = require("./path");

function mdLinks(route) {
   let abs = isABsolute(route);
   const rel = isRelative(route)
   const val = isValid(route)
   const md = isMarkdown(route)
   
   let newRoute
   let result 

   if (abs == false) {
       newRoute = rel;
       abs = isABsolute(newRoute);
   } 

   if ( abs == true && val == true && md == true ) {
      result = true;
   } 
   else {
      result = false;
   }
    
    return result;
  

}

console.log(mdLinks('lilianmmmm.md'));

//C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/lili.md