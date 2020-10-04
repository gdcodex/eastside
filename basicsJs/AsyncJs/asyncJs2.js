
///Callback Hell



const thanku = (resourse, callback) => {

    const request = new XMLHttpRequest;

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            callback("Have yoour error please", undefined);
        }
    });

    request.open('GET', resourse);
    request.send();
}


thanku("./AsyncJs/todo.json", (err, data) => {
    if (err) {
        console.log("Hey Gerem bro", err);
    }
    else {
        console.log('Hey buddy !!\n', data);
    };
    thanku("./AsyncJs/sodo.json", (err, data) => {
        if (err) {
            console.log("Hey Gerem bro", err);
        }
        else {
            console.log('Hey buddy !!\n', data);
        };
        thanku("./AsyncJs/xodo.json", (err, data) => {
            if (err) {
                console.log("Hey Gerem bro", err);
            }
            else {
                console.log('Hey buddy !!\n', data);
            };
        });
    });

})