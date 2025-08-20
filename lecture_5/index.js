const express = require('express'); // require gives function 
const app = express();   // function call
const path = require('path');

let blogs=[
    {
        'id':1,
        "author": "Blog 1",
        "comment": "this is blog 1"
    },
    {
        'id':2,
        "author": "Blog 2",
        "comment": "this is blog 2"
    },
    {
        'id':3,
        "author": "Blog 3",
        "comment": "this is blog 3"
    },
    {
        'id':4,
        "author": "Blog 4",
        "comment": "this is blog 4"
    },
    {
        'id':5,
        "author": "Blog 5",
        "comment": "this is blog 5"
    }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')))

// body parsing middleware  (by default undefined)
app.use(express.urlencoded({ extended: true }));


// let password=900;
// app.use('/blogs', (req,res,next)=>{
//     if(password === 800){
//         next();
//     }
//     else{
//         res.send("Sorry nhi ho paega")
//     }
// })


// root route
app.get('/', (req,res)=>{
    res.send("Hello connection established");
})

// CREATE
//form
app.get('/blog/new', (req,res)=>{
    res.render('blogs/new')  // yaha pe / nhi lagana shuru me
})

app.post('/blogs', (req,res)=>{
    let {author, comment} = req.body;
    blogs.push({id:blogs.length+1, author, comment})

    // res.send("blog created successfully")  
    res.redirect('/blogs');   // path dena h / lagana h pahle 
})

// READ
app.get('/blogs', (req,res)=>{
    res.render('blogs/index',{blogs});
})


// particular blog

// app.get('/blogs/:idd', (req,res)=>{
//     let {idd} = req.params;
//     // let foundBlog = blogs.find((blog)=> blog.id === parseInt(idd));
//     let foundBlog = blogs.find((blog) => blog.id == idd);
//     res.render('blogs/show', {foundBlog});
// })


// UPADATE



// DELETE

const PORT =8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`);
    
})