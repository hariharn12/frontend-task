function add(a,b){
    return a+b
}
console.log(add(2,10));

const adds = (a,b)=> a+b;
console.log(adds(100,100), 'arrow');


// hoisting
//  hari();
// function hari(){
//     console.log('hi hari');
    
// }
// x= 10;
// console.log(x);
// let  x; 

// var
function example(){

    if(true){
        let count = 100;
        console.log(count, 'ex');
        
    }
  
}
example()

let person ={
    name:'hari',
    age:24,
    gender:"male"
}
console.log(person.gender);

const age=10;
const height=5

if(age <20 && height <10){
    console.log('minor and short' );
    
}else{
    console.log('waiting');
    
}

const iuser=false
const user = iuser ?10:20;
console.log(user);

// Define an asynchronous function
async function fetchData() {
    try {
        // Simulate a delay using a Promise
        let data = await new Promise((resolve) => {
            setTimeout(() => resolve("Data loaded successfully!"), 2000);
        });
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the asynchronous function
fetchData();



