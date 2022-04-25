// write your code here
// dependencies
const http=require("http");
const host = 'localhost';
const requestListener = function(req, res, next) {
    console.log(req.url)
    res.writeHead(200, {"Content-Type":  " text/plain"});
    res.end('Hello World');
};
//const bodyParser = require('body-parser');
// port
const PORT = 8080;
// server create
const server = http.createServer(requestListener);
    server.listen(8080, host, null,() => 
    console.log(`Server is running on PORT: ${PORT}`)
       // console.log("Server listening on 8080"
       // res.end(Number),
    )/* else if (req.url  === "/about" && req.method === "GET") {
        res.write("Hello World!");
        res.end();
    }else {
        res.write("Not Found!");
        res.end();
    }
});
//server listen port
server.listen(8080);
console.log(`Server is running on PORT: ${PORT}`);
//--   var requestCount = 0;
//creates an express instance
    /*const app = express();
    //applies middleware
    app.use(morgan('dev'));
    app.use(function(req, res, next)) {
        requestCount ++;
        console.log('request number:' + 'request count:');
         next();
         app.use(function(req, res, next)){
             if(true);
                 next();{
             }else{
                 res.status(403).send("Forbidden!"){*/
            