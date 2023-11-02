const http = require('http');
const server =http.createServer(serverCallback);
    function serverCallback(req,res){
        res.write("hello");
        res.end();

    }
server.listen(3000,function(){
    console.log("server started");
});
function serverCallback(req,res){
    const url = req.url;
    if(url == '/create'){
    a.push (1);
    res.write(JSON.stringify(a));
 }else if(url =='/update'){
    a[0] = 2;
    res.write (JSON.stringify(a));
 }else if (url == '/read'){
    res.write(JSON.stringify(a));
 }else if(url == '/delete');
}