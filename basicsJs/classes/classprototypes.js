

function User(name,email){
    this.name= name;
    this.email=email;
    this.online=false;
    this.login=()=>{
        console.log("you are online");  //adding methods like this treats function like an item of the object 
        this.online=true;
    }
};

User.prototype.logout=()=>{
    console.log("you are offline");  //adding methods as prototypes--> correct way
    this.online=false;
};



//prototypes inheritance
function Admin(...args){
    User.apply(this,args);
    //adding extra properties
    this.company='plaxa';
}




 var one= new User('gerem','gerem@gmail.com');
 var two= new User('lucky','lucky@gmail.com');
 var three= new User('arjun','arjun@gmail.com');

 var admin= new Admin('father','paps@gmail.com');
 console.log(one);
 console.log(admin);

