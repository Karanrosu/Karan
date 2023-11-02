const http=require('http');

const server=http.createServere(callBackFunction);


let a=[];
function callBackFunction(req,res){
    if(req.method == 'post'){
        a.push(1);
        res.write(JSON.stringify(a));
    }
    else if (req.method == 'PUT'){
        a[0] = 2;
        res.write(JSON.stringify(a));
        
    }else if (req.method == 'GET'){
        res.write(JSON.stringify(a));
    }
    else if (req.method=='DELETE'){
    a.pop();
    
}
res.end();
}
server.listen(5000,function(){
    console.log('server started');
});
