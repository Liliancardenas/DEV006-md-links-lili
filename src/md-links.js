const { isABsolute, isRelative, isValid, isMarkdown } = require("./path");

function mdLinks(route) {
   
   
   
   return {
      isABsolute: isABsolute(route),
      isRelative: isRelative(route),
      isValid: isValid(route),
      isMarkdown: isMarkdown(route)
    };
}

console.log(mdLinks('C:\\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\'));
