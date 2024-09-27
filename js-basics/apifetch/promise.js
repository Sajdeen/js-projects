const promiseOne = new Promise(function(resolve, reject){
    //Do an async
    setTimeout(function(){
        console.log('Async task is complete');
   resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
resolve({username: "Chai", email: "chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promisefour =new Promise((resolve, reject) => {
    
})