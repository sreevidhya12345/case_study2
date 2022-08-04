const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const app = new express(); 

const bodyParser = require('body-parser');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');
// part1 point5
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');





app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{nav});
    // part1 point4 nav is called inside render
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});

// part 1 change main from server.js to app.js
// part1 point2 install node modules
