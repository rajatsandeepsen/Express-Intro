import {template} from './views/template.js'
import http from 'http'
import fs from 'fs'


const data404 = fs.readFileSync('./views/404.html')


const server = http.createServer((req,res)=>{
    console.log(req.method, req.url)
    // console.log(req)
    res.setHeader('Content-Type','text/html')
    let path = './views/'

    switch(req.url){
        case '/': path += 'index.html'
            res.statusCode = 200
            break
        case '/favicon': path += 'favicon.ico'
            res.statusCode = 200
            break
        case '/img.gif': path += 'img.gif'
            res.statusCode = 200
            break
        default : path += '404.html'
            res.statusCode = 404
            break
    }
    fs.readFile(path,(err,data)=>{
        if (err){
            res.end(data404)
            res.statusCode = 404
        }
        else res.end(data)
    })
})

server.listen(5500,() => {
    console.log('Server Started')
})