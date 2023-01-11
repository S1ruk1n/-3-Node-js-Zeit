
const http = require ('http')

const hostname = '127.0.0.1'
const port = 3500


let aufrufCounter = 0;

let heute = new Date();
let datum = `[${heute.getFullYear()}-${heute.getMonth() + 1}-${heute.getDate()} ${heute.getHours()}:${heute.getMinutes()}:${heute.getSeconds()}]`

console.log(datum)



const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader ('Content-Type', 'text/html');
 
    console.log (aufrufCounter++)

    response.end ('<input type="text" id="date">' )
    
});

// Der Port und der Hostname des Servers werden "konfiguriert"
server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
})