//making promise
const promiseOne = new Promise(function(resolve,reject){
    //DB Call,cryptography,network
    //Do an async task
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
        
    },1000)
});

promiseOne.then(function(){
    console.log('Promised consumed');
    
})

//console.log("Called Promise Two");
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})


//console.log("Called Promise Three");
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"shubham",email:"s12@gmail.com",password:"s123"})
    },1000)
})

promiseThree.then(function(users){
    console.log(users);
    
})


//console.log("Called Promise Four");
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let ERROR = true;
        if(!ERROR){
            resolve({username:"shubham",password:"s123"})
        }
        else{
            reject('Error : Something went Wrong...');
            
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username);
    
}).catch(function(ERROR){
    console.log(ERROR);


}).finally(() => console.log("The promise is either resolved or rejected"))


//Fifth Promise
//console.log('Called Promise Five');
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let Error = false;
        if(!Error){
            resolve({username: "JavaScript",password:"js123"})
        }
        else{
            reject("ERROR : Something Went Wrong...")
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
        
    }catch(Error){
        console.log(Error);
        
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     }catch(error){
//         console.log("Error: " , error);
        
//     }
// }
// getAllUsers();


// async function getShubhamData(){
//     try{
//         const response = await fetch("https://api.github.com/users/ShubhamKashyap1001")
//         const data  = await response.json()
//         console.log(data);
        
//     }catch(error){
//         console.log("Error : ",error);
        
//     }
// }

// getShubhamData();


fetch('https://api.github.com/users/ShubhamKashyap1001')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    
}).catch((error) => console.log(error))