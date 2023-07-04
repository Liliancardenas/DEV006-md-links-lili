const { analyzeRoute } = require('./index');
const {extractLinks, getLinksStatus } = require ('./path');

const route = process.argv[2]; //contiene los argumentos pasados por línea de comandos ejemplo (0=node, 1=archivo.js, 2=archivo o ruta mas argumento)
const validate = process.argv.includes('--validate'); //verifica si el argumento --validate está presente en la matriz process.argv. Devuelve true si el argumento está presente y false en caso contrario.

function mdLinks(route, options = { validate }) { // le pasamos dos argumentos
    return new Promise((resolve, reject) => {
 
    let links = [];
  
    analyzeRoute(route) // esta funcion devuelve una promesa
      .then((content) => { //.then para manejar el resultado de la promesa
        if (!options.validate) { //verificamos que validate sea false
          links = extractLinks(route, content); // llamamos la funcion 
          return  (links);// retorna los enlases encontrados
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
         /* console.log('Enlaces encontrados:', responses);
          return 'Enlaces encontrados:', responses;*/
       
      })
      .catch((error) => {
        /*console.log(error)
        return 'Ruta invalida o no es un archivo markdown'*/
      });
    })
  }
  
  mdLinks(route, { validate });