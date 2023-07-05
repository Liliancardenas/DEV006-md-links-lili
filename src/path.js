const path = require('path'); // para llamar ruta absoluta desde nodeJS path es un modulo 
const fs = require('fs'); // file system proporciona funciones para trabajar con el sistema de archivos.
const axios = require('axios'); // Axios es una biblioteca de http se utiliza para llamar http(links) y ver sus respuestas (estado)
const { log, Console } = require('console');


// ----------Funcion que lee una ruta absoluta----------
function isABsolute(route) { // isAbsolute es una propiedad de nodeJs para validar una ruta absoluta
     return path.isAbsolute(route);
} 



// ----------Funcion que convierte una ruta relativa en absoluta----------
function isRelative(route) {
    return path.resolve(route) // resolve para convertirla en una ruta absoluta
}



// ----------Funcion que lee si una ruta es valida o no----------
 function isValid(route) {
  try {
   fs.accessSync(route);  //verifica si se puede acceder a un archivo o directorio en una ruta específica de manera síncrona, lo que significa que bloquea la ejecución del programa hasta que se complete la verificación.
    return true;         // realiza exepcion (un evento inesperado)
  } catch (error) { 
    return 'La ruta no existe';
  }
 }



// ----------Función que ve si es directorio o archivo---------
function isFileOrDirectory(route) { // 
  try {
  const inspectRoute = path.resolve(route);  // resolve para convertirla en una ruta absoluta
  const stats = fs.statSync(inspectRoute); // statSync es una función sincrónica que devuelve un objeto, (Informacion sobre la ruta) 
  if (stats.isFile()) {
    return 'Es un Archivo';
  } else {
    return 'Es un Directorio';
  }
    } catch (error) {
      return 'Error: Archivo/directorio roto o no encontrado' 
  }
}



//----------Funcion que lee los directorios---------- 
function readDirectory(route) {
    return fs.readdirSync(route);
}


//----------Funcion que lee el archivo----------
function readFile(route) { 
  return new Promise((resolve, reject) => { // se crea una promesa para manejar la lectura asíncrona del archivo.
    fs.readFile(route, 'utf8', (error, content) => { // primer argumeto route que representa la ruta del archivo, utf8 codificacion para que se interprete como texto se realiza la devolucion de llamada con error y content(contenido)
      if (error) return reject(error);   // para rechazar la promesa y pasar el error al manejador de errores.
      resolve(content); //para cumplir la promesa con el contenido del archivo leído lo que permitirá que el código que esté esperando la resolución de la promesa acceda al contenido del archivo.
    });
  })
}
    

//---------Funcion que ocupa AXIO para acceder a información del links---------
function getLinksStatus(url) {
  return axios.get(url)
    .then((response) => {
      const status = response.status;
      const statusText = response.statusText;
      return { 
        status: status, 
        message: statusText };
    })
    .catch((error) => {
      throw error, error.message;
    });
}


//---------Funcion para extraer links---------
function extractLinks(route, content) {
    const regex = content.matchAll(/\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g); 
    const results = [...regex]; // convertimos regex en array (Spread Operator)
    const links = results.map((result) => ({  // MAP para iterar a través de los elementos dentro de un arreglo que es un objeto
      text : result[1],
      href: result[2],
      file: route
      }))

    return links;
}



// ----------Funcion que lee si la ruta es .md----------
function isMarkdown(route) {
    const extension = path.extname(route); // extname para obtener la extensión del archivo en la ruta 
    return extension.toLowerCase() === '.md'; // se compara si la extensión convertida a minúsculas es igual a ".md"
   }





module.exports =  {  // crear un objeto con lo que vamos a exporta
 isABsolute,
 isRelative,
 isValid,
 isFileOrDirectory,
 readDirectory,
 readFile,
 isMarkdown,
 extractLinks,
 getLinksStatus
};












