const express = require('express');
const app = express();
const user=require('./Routes/users');
const students=require('../controllers/student')
const port=3000;
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb');
mongoose.connection.on('error',console.error.bind(console,'MongoDB Connection eror:'));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.json("tutorial: Build Rest APIs for student database")
})
app.use('/users',users)
app.use('/students',validateUser,students)

function validateUser(req,res,next){
    try{
        const token=req.header('Authorization').replace('Bearer',' ')
        const data=jwt.verify(token,process.env.JWT_KEY)
        if(!data){
            throw new Error({error:"Enter valid credentials"});
        }
        next()
    }catch(error)
        {
            res.status(401).send({error:'Not authorized to access this resource'})
        }
    }
app.listen(port,()=>{
    console.log("Server listening on port" +port);
})