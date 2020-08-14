const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');
const saltRounds=10;
const UserSchema=new Schema({
    name:{
    type:String,
    trim:true,
    required:true
    },
    email:{
    type:String,
    trim:true,
    required:true
    },
    password:{
        type:String,
        trim:true,
        required:true

    }
});
UserSchema.pre('save',function(next){
    this.password=bcrypt,hasSync(this.password,saltRounds);
    next()
});

module.exports=mongoose;