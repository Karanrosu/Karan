const http=require('http');

const server=http.createServer(callBackFunction);


let a=[];

function callBackFunction(req,res){
    if(req.method == 'post'){
        a.push(1);
        
    }
    else if (req.method == 'PUT'){
        a[0] = 2;
        
     //iueiotuiow   
    }else if (req.method == 'GET'){
        
    }
    else if (req.method=='DELETE'){
    a.pop();
    
}
res.write(JSON.stringify(a));
res.end();
}
server.listen(5006,function(){
    console.log('server started');
});
