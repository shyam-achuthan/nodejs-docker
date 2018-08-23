var express = require('express');
var router = express.Router();


function jsonError(res,data = null,message = 'Error',status=200) {
    let jsondata =  {
        meta:{
            success:false,
            message:message,
        },
        data:data
    };

  res.status(status).json(jsondata);
}

function jsonSuccess(res,data = null,message='Success',status=200) {
    let jsondata =  {
        meta:{
            success:true,
            message:message,
        },
        data:data
    };

  res.status(status).json(jsondata);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/api', function(req, res, next) {
  jsonSuccess(res,[],"Good")
});

module.exports = router;
