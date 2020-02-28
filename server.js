const express=require('express');
const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

const dbConfig=require('./database.config');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> {
    console.log("Successfully connected to database");
}).catch(err =>{
    console.log("could not connected to the database. Exiting now...");
    process.exit();    
});

//define a simple route
// app.get('/',(req,res)=>{
//     let message="Welcome to the login page used with callback"
//     res.json({"message":message})
// });

//setting login routes to express app
require('./main/routes/login.routes')(app)

//listen for request 3000
app.listen(3000,()=>{
    console.log("server is listening on port 3000......"); 
});