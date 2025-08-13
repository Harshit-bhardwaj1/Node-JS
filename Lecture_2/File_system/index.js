// const path = require('path')   // common js

// import path from 'path'    // import js

// console.log(path.join('sam','vohra','maverick','dog'));


// -----------------------------------------------------------------------------------------------

// import fs from 'fs'  / esmodule


// CREATE

const fs = require('fs');

// let data = 'namaste ji ki haal chaal copy to all'

// fs.writeFile('sam.txt', data, {
//     encoding : "utf-8",
//     flag:'w'
// },
//  (err)=>{
//     if(err){throw err}
//     console.log("File created successfully");
    
//  });



// READ

// method 1 to read buffer data

// fs.readFile('sam.txt',{
//     encoding : "utf-8",
//     flag:'r'
// }, (err,data)=>{
//     if(err){ throw err}
//     console.log(data);
    
// })

// method 2 toString()

// fs.readFile('sam.txt',{}, (err,data)=>{
//     if(err){ throw err}
//     console.log(data.toString());
    
// })


// UPDATE

// fs.appendFile('sam.txt', 'mai nhi bata raha', (err)=>{
//     if(err){throw err}
//     console.log("data edited succesfully");
    
// })

// fs.readFile('sam.txt',{}, (err,data)=>{
//     if(err){ throw err}
//     console.log(data.toString());
    
// })


// DELETE

fs.unlink('sam.txt', (err)=>{
    if(err){throw err}
    console.log("file deleted successfully");
    
})