const app = require('./app.js');

require('./database.js');



//Funtion Main
async function main(){
    await app.listen(app.get('port'));//metodo asincrono
    console.log(`Listen app in port: ${app.get('port')}`)
}

main();