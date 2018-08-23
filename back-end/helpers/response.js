var exports=module.exports={};

 

exports.jsonError = function(res,data = null,message = 'Error',status=200) {
    let jsondata =  {
        meta:{
            success:false,
            message:message,
        },
        data:data
    };

  res.status(status).json(jsondata);
}

exports.jsonSuccess = function(res,data = null,message='Success',status=200) {
    let jsondata =  {
        meta:{
            success:true,
            message:message,
        },
        data:data
    };
    
  res.status(status).json(jsondata);
}