const { isAbsolute } = require(".");

function mdLinks(route) {
   return isAbsolute(route)
}

console.log(mdLinks('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili'))
