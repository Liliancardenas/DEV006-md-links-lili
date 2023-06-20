const path = require('path'); // para llamar ruta absoluta desde nodeJS path es un modulo 
const fs = require('fs'); // file system hace la lectura de los archivos 


// ----------Funcion que lee una ruta absoluta----------
function isABsolute(route) { // isAbsolute es una propiedad de nodeJs para validar una ruta absoluta
  try {
     return path.isAbsolute(route);
  } catch (error) {
    console.log('Error: ', error);
  }
}
//console.log(isABsolute('C:\\Users\\56957\\Desktop'));


// ----------Funcion que convierte una ruta relativa en absoluta----------
function isRelative(route) {
  try {
    return path.resolve(route) // resolve para convertirla en una ruta absoluta
  } catch (error) {
    console.log('Error: ', error);
  }
}
 //console.log(isRelative('lili.md'))


// ----------Funcion que lee si una ruta es valida o no----------
 function isValid(route) {
  try {
   fs.accessSync(route);  // esta funcion no devuelve un boleano por ello se retorna un boleano
    return true;
  } catch (error) {
    console.log('ERROR', error);
    return false;
  }
 }
//console.log(isValid('C:/Users---56957¬Desktop/Laboratoria/MD-LINKS....DEV006-md-links-lili/README.md'));


// ----------Funcion que lee si la ruta es .md----------
function isMarkdown(route) {
try {
  const extension = path.extname(route); // extname para obtener la extensión del archivo en la ruta especificada
  return extension.toLowerCase() === '.md'; // se compara si la extensión convertida a minúsculas es igual a ".md"
 } catch (error) {
  console.log('Error: ', error);
 }
}
//console.log(isMarkdown('C:\Users\\56957\\Desktop\\Laboratoria\\MD-LINKS\\DEV006-md-links-lili\\package-lock.json'))



module.exports =  {  // crear un objeto con lo que vamos a exporta
 isABsolute,
 isRelative,
 isValid,
 isMarkdown
};
