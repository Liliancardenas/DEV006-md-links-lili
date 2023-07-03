const { analyzeRoute } = require('./index');
const {extractLinks, getLinksStatus } = require ('./path');
const route = process.argv[2];
const validate = process.argv.includes('--validate');

function mdLinks(route, options = { validate }) {
    let links = [];
  
    analyzeRoute(route)
      .then((content) => {
        if (!options.validate) {
          links = extractLinks(route, content);
          console.log('Enlaces encontrados:', links);
        } else {
          const promises = extractLinks(route, content).map((link) => {
            return getLinksStatus(link.href)
              .then((response) => {
                return { ...link, ...response };
              })
              .catch((error) => {
                return { ...link, status: null, message: 'FAIL' };
              });
          });
  
          return Promise.all(promises);
        }
      })
      .then((responses) => {
        if (responses) {
          console.log('Enlaces encontrados:', responses);
          return responses;
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  
  mdLinks(route, { validate });