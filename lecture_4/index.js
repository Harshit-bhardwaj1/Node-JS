const path = require('path');
const express = require('express');
const app = express();

let arr= [10,20,30,40,50];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req,res)=>{
    res.send("welcome to root Route");
})

app.get('/samarth',(req,res)=>{
    // res.send("welcome samarth");
    res.render('products/index', {arr:arr})
})


// samarth port
// app.get('/samarth',(req,res)=>{
//     res.send("welcome samarth");
// })


// app.get('*',(req,res)=>{
//     res.send("Invlaid Port");
// })

const PORT =8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`);
    
})