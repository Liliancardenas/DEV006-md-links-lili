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
console.log(isABsolute('C:\\Users\\56957\\Desktop'));



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
   fs.accessSync(route);  // esta funcion no devuelve un boleano por ello se retorna un boleano
    return true;
  } catch (error) {
    console.log('ERROR', error);
    return false;
  }
 }
console.log(isValid('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/README.md'));



// ----------Función que ve si es directorio o archivo---------
function fileOrDirectory(route) { // 
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
console.log(fileOrDirectory('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/README.md'))



//----------Funcion que lee los directorios---------- 
function readDirectory(route) {
  try {
   return fs.readdirSync(route);
  } catch (error) {
    console.log('Error: ', error);
  }
}
console-log(readDirectory('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/'));


//----------Funcion que lee el archivo----------
 function readContent(route) {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf8', (error, content) => {
            if (error) return reject(error);
            return resolve(content);
        })
  })
  .then ((content) => {
   console.log('muestra la el contenido del archivo', content);
    //const links = content.match(/https?:\/\/\S*/g); // match devuelve todas las ocurrencias de una expresion regular
    //console.log(links);
  })
  .catch ((error) => {
    console.log('Error: ', error);
  });
}
console.log(readContent('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/testFile/lili.md'));



//function extraerLinks(readContent) {
  //try {
   // const links = readContent.match(/https?:\/\/\S*/g);
    //return links;
 // } catch (error) {
   // console.log('Error: ', error);
    
//  }
//}

//console.log(extraerLinks('C:/Users/56957/Desktop/Laboratoria/MD-LINKS/DEV006-md-links-lili/testFile/lili.md'));

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
 fileOrDirectory,
 readDirectory,
 readContent,
 isMarkdown
};
