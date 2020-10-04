const todos=(callback)=>{
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4 && request.status==200){
        const data= JSON.parse(request.responseText);
        callback(undefined,data);
    }
    else if(request.readyState===4){
        callback("couldn't find anything",undefined);
    };
});


// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.open('GET','./AsyncJs/todo.json');
request.send();

};

///implementing actual code
console.log(11);
console.log(12);



todos((err,data)=>{
     if(err){
         console.log('Nothing', err);
     }
     else{
         console.log( 'Your data gerem---\n',data);
     }
});


console.log(13);
console.log(14);