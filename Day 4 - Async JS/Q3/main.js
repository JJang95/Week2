async function delayedRequest(url) {
    return new Promise((resolve) => {
        setTimeout(async function () {
            let get = await fetch(url);
            let info = await get.json();
            console.log(info);
            resolve(info);
        }, 2000);
    });
}

//Test1
delayedRequest("https://jsonplaceholder.typicode.com/users").then((info) => {
    console.log(info);
});

//Test2

delayedRequest("https://jsonplaceholder.typicode.com/users/1").then((info) => {
    console.log(info);
});

//Test 3

delayedRequest("https://jsonplaceholder.typicode.com/users/7").then((info) => {
    console.log(info);
});