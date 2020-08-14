const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        trim:true,
        required:true
    },
    LastName:{
        type:String,
        trim:true,
        required:true
    },
    DOB:{
        type:Date,
        trim:true,
        required:true,
    },
    Age:{
        type:Number,
        trim:true,
        required:true
    },
    College:{
        type:String,
        trim:true,
        required:true
    },
    Batch:{
        type:String,
        trim:true,
        required:true
    }
  
})
module.export=studentSchema