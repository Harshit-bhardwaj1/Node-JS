//console.log("welcome");


// console.log(process.argv);

// console.log(process.argv.pop());

let neww = process.argv.slice(2);

for(let i=1; i<=neww[1]; i++){
    console.log(neww[0]);
}