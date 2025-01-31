const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    if (req.method === 'GET' && req.url === "/api/details") {
        res.writeHead(200, {
            'Content-Type': "application/json"
        });

        res.write(JSON.stringify({
            email: "jaybiddy.jh@gmail.com",
            current_datetime: new Date().toISOString(), 
            github_url: "https://github.com/CoderHaqiim/HNG-stage-0-0"
        }));

        res.end()
    }else{
        res.writeHead(404, {
            'Content-Type': "application/json"
        });
        res.end(JSON.stringify({message: "Requested resoource not found"}))
    }
    
});

server.listen(PORT, () => {
    console.log(`Server listening at port ${ PORT}`);
});