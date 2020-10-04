
//creating class
class User{
    //class constructor
    constructor(name,email){
        this.n= name;
        this.e = email;
        this.score= 0;
    }
    //class methods
    login(a){
        console.log(a, this.e ,',','Just logged in !');
        return this;
    }
    logout(a){
        console.log(a , this.n,',',"Just logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.e, 'score is', this.score);
        return this;
    }
}


// class inheritance
class Admin extends User{

    deleteUser(user){
         users= users.filter(b =>b.e != user.e); //if we had passed array as an argument it would be pass by value as it is being reassigned
        // arr.push(user);
    }
    delete(user,array){
        array.forEach((element,i)=>{  //here array is changed as it is not reassigned
            if(user.e===element.e)array.splice(i,1);
        })
    }


}

var userOne= new User('gerem','g@fmail.com');
var userTwo= new User('ferem','f@fmail.com');
var admin = new Admin('gdaiAd',"@instamail.com");
var users=[userOne,userTwo,admin,{morning:'lemon'}];


// console.log(userOne.n+' '+userOne.e);
// userOne.f="fadded";
// console.log(userOne);
// console.log(User);
// userOne.login("Hey");
// userOne.logout("Ciao");
// userOne;
// userOne.updateScore().login('Vamos').updateScore().logout('Ciao');

admin.deleteUser(admin);//without taking array as an argument
admin.delete(userOne,users); //taking array as an argument
console.log(users);

