

const getData= async(resource) =>{ //this returns a promise

    const response = await fetch(resource);
    const data = await response.json();
    return data;

};


getData("./AsyncJs/todo.json")
    .then(e=>console.log(e))
    .catch(err=>console.log(err));