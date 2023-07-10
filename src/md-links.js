const { analyzeRoute } = require('./index');
const {extractLinks, getLinksStatus } = require ('./path');
const route = process.argv[2]; //array contiene los argumentos de la linea de comando pasados por línea de comandos ejemplo (0=node, 1=archivo.js, 2=archivo o ruta mas argumento)
const { log, Console } = require('console');


function mdLinks(route, options = { validate }) { // le pasamos dos argumentos
  return new Promise((resolve, reject) => {
    let links = [];
  
    analyzeRoute(route) // esta funcion devuelve una promesa
    
      .then((content) => { //.then para manejar el resultado de la promesa
        if (Array.isArray(content)) { //Se verifica si el contenido devuelto por la promesa es un arreglo 
          log('Es un directorio', content)
          resolve(content); 
        }
        else if (!options.validate) { //verificamos que validate sea false
          links = extractLinks(route, content); // llamamos la funcion 
          return  links;// retorna los enlases encontrados
        } else { // cuando option si esta presente
          const promises = extractLinks(route, content).map((link) => { // aqui optenemos los enlases igual que en el if pero lo utilizamos con map para iterar en cada enlase y crear un nuevo array de promesa
            return getLinksStatus(link.href) // dentro de cada promesa llamamos esta funcion, esta funcion tambien tiene una promesa que se asigna a promise
              .then((response) => {
                return { ...link, ...response };
              })
              .catch((error) => {
                return { ...link, status: null, message: 'FAIL' };
              });
          });
  
          return Promise.all(promises); //Promise.all, para esperar a que todas las promesas se resuelvan
        }
      })
      .then((responses) => { // para manejar los resultados 
          log('Enlaces encontrados:', responses);
          resolve(responses)
      
      })
      .catch((error) => {
        log('Ruta invalida o no es un archivo markdown');
        //reject ('Ruta invalida o no es un archivo markdown');
      });
    })
}


mdLinks(route, { validate: false });

module.exports = {
  mdLinks
}