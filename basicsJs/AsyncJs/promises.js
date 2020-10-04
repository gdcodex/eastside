const getdata=(resource)=>{
    

    const request= new XMLHttpRequest();

    
    return new Promise((resolve,reject)=>{

        request.addEventListener('readystatechange',()=>{
            if(request.readyState===4 && request.status===200){
                const data= JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState===4){
                reject("Could not fetch the data");
            }
        });
        request.open('GET',resource);
        request.send();
    });

}

getdata('./AsyncJs/sodo.json').then(e=>{
    console.log("Here is your data Gerem --->\n",e);
}).catch(ex=>{
    console.log("Brooo ,",ex);
})

/////Chaining  promises
getdata('./AsyncJs/todo.json').then(e=>{
    console.log("first data:\n",e);
    return getdata('./AsyncJs/xodo.json');
}).then(e=>{
    console.log("second data:\n",e);
    return getdata('./AsyncJs/sodo.json');
}).then(e=>{
    console.log('third data:\n',e);
}).catch(err=>{
    console.log('sorry buddy',err);
});