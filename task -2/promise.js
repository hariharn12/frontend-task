const promise = new Promise((resolve, reject) => {
    console.log('heelo welcome');
    const isinternetWorking = true
    setTimeout(() => {
        if (isinternetWorking) {

            resolve({ message: 'Yeah the internet Working ', })
        } else {
            reject('No internet is not Working')
        }
    }, 3000);

})
promise.then((result) => {
    console.log('Return first THEN :', result.message)


    return new Promise((resolve, reject) => {
        resolve('internet will stable in 1 day')
    })
        .then((anotheresult) => {
            console.log(anotheresult);

        })


}).catch((error) => {
    console.error(error);

})

console.log('Process undergoing');


// console.log('start');

// function saymyname(name) {
//     return console.log(`hi ${name}`);
// }
// saymyname('hariharan')
// console.log('stop');



