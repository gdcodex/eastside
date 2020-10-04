

fetch('./AsyncJs/sodo.json').then(response=>{
    console.log("Resolved:",response);
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log("Rejected:",err);
});





fetch("./AsyncJs/xodo.json").then(e=>{
    return e.json();
}).then(e=>{
    console.log("Xodo data being fetched",e);
}).catch(err=>{
    console.log(err);
})