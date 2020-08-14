const studentmodel=require('../models/student');
module.exports={
    create:function(req,res,next){
        studentmodel.Create({FirstName:req.body.FirstName,LastName:req.body.LastName,DOB:req.body.DOB,Age:req.body.College,Batch:req.body.Batch},function (err,result) {
            if(err){
                next(err)
            }
            else{
                res.json({status:"success",message:"Student added successfully",data:null})
            }
        })
    },
    getAll:function(req,res,next){
        let studentList=[];
        studentmodel.find({},function(err,students){
            if(err){
                next(err);
            }
            else{
                for(let student of students){
                    studentList.push({id:student.id,firstname:student.FirstName,lastname:student.LastName,dob:student.DOB,Age:student.Age,college:student.College, bathc:student.Batch})
                }
                res.json({status:"succes",message:"Students Found",data:{students:studentsList}})
            }
        })
    },
    getById:function(req,res,next){
        studentmodel.findById(req.params.id,function(err,studentInfo){
            if(err){
                next(err)
            }else{
                res.json({status:"success",mesage:"Student Found",data:{student:studentInfo}})
            }
        })
    },
    updateById:function(req,res,next){
        studentmodel.findByIdAndUpdate(req.params.id,{FirstName:req.body,FirstName,LastName:req.body.LastName,DOB:req.body.DOB,Age:req.body.College,Batch:req.body.Batch},function(err,result){
        if(err){
            next(err)
        }else{
            res.json({status:"success",mesage:"Student details updated successfully",data:null})
        }
    })
    },
    deleteById:function(req,res,next){
        studentmodel.findByIdAndRemove(req.params.id,function(err,studentInfo){
            if(err){
                next(err)
            }else{
                res.json({status:"status",message:"Student details deleted",data:null})
            }
        })


    }

}