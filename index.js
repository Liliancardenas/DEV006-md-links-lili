const path = require('path'); // para llamar ruta absoluta desde nodeJS path es un modulo 

function isAbsolute(route) { // isAbsolute es funcion de nodeJs
  try {
     return path.isAbsolute(route);
  } catch (error) {
    console.log('Error: ', error);
  }
}

console.log(isAbsolute('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili'))

module.exports =  {  // crear un objeto con lo que vamos a exporta
 isAbsolute
};
