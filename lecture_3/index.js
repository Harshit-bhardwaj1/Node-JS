const express = require('express');  // it is a fn

const app= express();   // it is the instance of the application

app.get('/', (req,res)=>{
    res.send("welcome to root route");
    
})

app.get('/home', (req,res)=>{
    res.send('<h1>Balle balle</h1>')
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server connected at port: ${PORT}`);
    
})

