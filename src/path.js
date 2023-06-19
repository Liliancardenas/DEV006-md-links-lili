const path = require('path'); // para llamar ruta absoluta desde nodeJS path es un modulo 
const fs = require('fs'); // file system 

function isABsolute(route) { // isAbsolute es funcion de nodeJs 
  try {
     return path.isAbsolute(route);
  } catch (error) {
    console.log('Error: ', error);
  }
}
console.log(isABsolute('C:\\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\lili.md'));



function isRelative(route) {
  try {
    return path.resolve(route) // resolve para convertirla en una ruta absoluta
  } catch (error) {
    console.log('Error: ', error);
  }
}
 console.log(isRelative('lili.md'))



 function isValid(route) {
  try {
    return fs.existsSync(route);  // síncrona, si un archivo ya existe en la ruta dada o no devuelve un boleano
  } catch (error) {
    console.log('Error: ', error);
  }
 }
console.log(isValid('C:\\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\lili.md'))



module.exports =  {  // crear un objeto con lo que vamos a exporta
 isABsolute,
 isRelative
};
