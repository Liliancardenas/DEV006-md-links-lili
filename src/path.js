const path = require('path'); // para llamar ruta absoluta desde nodeJS path es un modulo 
const fs = require('fs'); // file system 


// ----------Funcion que lee una ruta absoluta----------
function isABsolute(route) { // isAbsolute es funcion de nodeJs 
  try {
     return path.isAbsolute(route);
  } catch (error) {
    console.log('Error: ', error);
  }
}
console.log(isABsolute('C:\\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\lili.md'));


// ----------Funcion que convierte una ruta relativa en absoluta----------
function isRelative(route) {
  try {
    return path.resolve(route) // resolve para convertirla en una ruta absoluta
  } catch (error) {
    console.log('Error: ', error);
  }
}
 console.log(isRelative('lili.md'))


// ----------Funcion que lee si una ruta es valida o no----------
 function isValid(route) {
  try {
    return fs.existsSync(route);  // síncrona, si un archivo ya existe en la ruta dada o no devuelve un boleano
  } catch (error) {
    console.log('Error: ', error);
  }
 }
console.log(isValid('C:\\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\package-lock.json'));


// ----------Funcion que lee si la ruta es .md----------
function isMarkdown(route) {
try {
  const extension = path.extname(route); // extname para obtener la extensión del archivo en la ruta especificada
  return extension.toLowerCase() === '.md'; // se compara si la extensión convertida a minúsculas es igual a ".md"
 } catch (error) {
  console.log('Error: ', error);
 }
}
console.log(isMarkdown('C:\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\package-lock.json'))



module.exports =  {  // crear un objeto con lo que vamos a exporta
 isABsolute,
 isRelative,
 isValid,
 isMarkdown
};
