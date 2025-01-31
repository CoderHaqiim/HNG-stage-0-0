const http = require('http')
const path = require('path')
const PORT = "8080"
const dateTime = new Date().toISOString()

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-type': "application/json"
    })
    
    if(req.method === 'GET' && res.url== "/details"){
        res.write(200,{
            "content-type":"application/josn"
        })
        res.write(JSON.stringify({
            email: "jaybiddy.jh@gmail.com",
            current_datetime: dateTime,
            github_url: fff
        }))
    }
    res.end()
})

server.listen(PORT, ()=>{
    console.log("server listening at port" + PORT)
})
