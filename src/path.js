const path = require('path'); // para llamar ruta absoluta desde nodeJS path es un modulo 
const fs = require('fs'); // file system hace la lectura de los archivos 
const { log, Console } = require('console');


// ----------Funcion que lee una ruta absoluta----------
function isABsolute(route) { // isAbsolute es una propiedad de nodeJs para validar una ruta absoluta
  try {
     return path.isAbsolute(route);
  } catch (error) {
    console.log('Error: ', error);
  }
} 



// ----------Funcion que convierte una ruta relativa en absoluta----------
function isRelative(route) {
  try {
    return path.resolve(route) // resolve para convertirla en una ruta absoluta
  } catch (error) {
    console.log('Error: ', error);
  }
}



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



// ----------Función que ve si es directorio o archivo---------
function isFileOrDirectory(route) { // 
  try {
  const inspectRoute = path.resolve(route);
  const stats = fs.statSync(inspectRoute); // statSync identifica si es un directorio o archivo 
  if (stats.isFile()) {
    return 'Es un Archivo';
  } else {
    return 'Es un Directorio';
  }
    } catch (error) {
        console.log('Error: Archivo/directorio roto o no encontrado', error); 
  }
}



//----------Funcion que lee los directorios---------- 
function readDirectory(route) {
  try {
    return fs.readdirSync(route);
  }catch (error) {
    console.log('Error: ', error);
    return [];
  }
}



//----------Funcion que lee el archivo----------
 function readContent(route) {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf8', (error, content) => {
            if (error) return reject(error);
            return resolve(content);
        })
  })
  .then ((content) => {
   const links = extractLinks(content);
   console.log('Enlaces encontrados:', links);
   return links;
  })
  .catch ((error) => {
    console.log('Error: ', error);
  });
}



function extractLinks(content) {
    const regex = content.matchAll(/\[([^\]]+)\]\(([^\)]+)\)/g);
    const results = [...regex];
    const links = results.map(result => ({ 
      text : result[1],
      href: result[2]
      }))
    return links;
  
}



// ----------Funcion que lee si la ruta es .md----------
function isMarkdown(route) {
  try {
    const extension = path.extname(route); // extname para obtener la extensión del archivo en la ruta especificada
    return extension.toLowerCase() === '.md'; // se compara si la extensión convertida a minúsculas es igual a ".md"
   } catch (error) {
    console.log('Error: ', error);
   }
  }

 

module.exports =  {  // crear un objeto con lo que vamos a exporta
 isABsolute,
 isRelative,
 isValid,
 isFileOrDirectory,
 readDirectory,
 readContent,
 isMarkdown
};












