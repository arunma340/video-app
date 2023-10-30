// import server
const jsonserver=require('json-server')
 
// import cors

const cors=require('cors')







//create json server
const server = jsonserver.create()

// json type data must convert to js data- before request resolve
// to control requests ,middlewares are used
// middle wares have the ability to control all server request in a server
// if we apply middle wares in server, the middle ware wil work before the request

const middleware=jsonserver.defaults()


// create a router
const router=jsonserver.router('db.json')




// apply in server

server.use(middleware)
server.use(cors())
server.use(router)


// to run server, port is defined
const PORT=5000
server.listen(PORT,()=>{
    console.log(`json server started at port:${PORT}  `);
})