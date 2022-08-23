//Lecture 278

// a promises is an object representing the eventual completion of failure of an  asynchronous operation

const fakeRequestPromise = (url) =>{
    return new Promise((resolve,reject) =>{
        const delay = Math.floor(Math.random()*(4500)) + 500;
        setTimeout(()=>{
            if(delay > 4000){
                reject("Connection Timeout :(")
            }
            else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const resquest = fakeRequestPromise('newurl.com');


// resquest
//     .then(()=>{
//     console.log("Promise Resolved");
//     console.log("it worked !!!!!!!");
//     })
//     .catch(()=>{
//     console.log("Promise Rejected");
//     console.log("sorry this time"); 
//     })


//Lecture 279

// To avoid call back hell or to avoid nested function calls we use promises 

// const delayedColorChange = (color,delay) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red' ,1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

    




















// Async Function :- A newer and cleaner syntax for working with async code ! Syntax "makeup" for promises   
  
// Async keyword always return a promise.      
// If the function return a value, the promise will be resolved with that value
// if the function throws an exception, the promise will be rejected

// const sing = async () =>{
//     throw "ohh noo Problem"
//     // return 'la la la la' 
// }

// sing()
//     .then((data) => {
//     console.log("Promise is resolved ", data)
//     })
//     .catch(err => {
//         console.log('oohh no problem')
//     })


// const login = async (userName, password)=>{
//     if(!userName || !password) throw 'Missing Credentials'
//     if(password === 'kratik') return 'Welcome'
//     throw 'Invalid password'
// }

// login('afdjkasdfbdk' , 'kratik')
//     .then(msg =>{
//         console.log("logged in")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('ERROR')
//         console.log(err)
//     })


















// The await keyword
// we can only use the await keyword inside of function declared with async
// await will pause the execution of the function, waiting for a promise to be resolved

// const delayedColorChange = (color,delay) =>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red' , 1000)
//     .then(() =>{delayedColorChange('orange' , 1000)})
//     .then(() =>{delayedColorChange('yellow' , 1000)})
//     .then(() =>{delayedColorChange('green' , 1000)})
//     .then(() =>{delayedColorChange('blue' , 1000)})
//     .then(() =>{delayedColorChange('indigo' , 1000)})
//     .then(() =>{delayedColorChange('violet' , 1000)})

// async function rainbow(){
//     await delayedColorChange('red' , 1000)
//     await delayedColorChange('orange' , 1000)
//     await delayedColorChange('yellow' , 1000)
//     await delayedColorChange('green' , 1000)
//     await delayedColorChange('blue' , 1000)
//     await delayedColorChange('indigo' , 1000)
//     await delayedColorChange('violet' , 1000)
// }

// rainbow()
//     .then(()=>{console.log("End Of the Rainbow")})

// const printRainbow = async () =>{
//     await rainbow();
//     console.log("End OF the Rainbow")
// }

async function makeTwoRequest(){
    try{
    let data1 = await fakeRequestPromise('./page1');
    console.log(data1);
    let data2 = await fakeRequestPromise('./page2');
    console.log(data2);
    }
    catch(e){
        console.log("caught an erroe")
        console.log("Error is : ", e)
    }
}
makeTwoRequest();