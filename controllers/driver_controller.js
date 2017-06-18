const Driver = require('../models/driver');

module.exports = {
greeting : function(req,res){
    res.send({hi:'there'});
},

// The third parameter of the request 'handlers' are all 'next'
create : function(req,res,next){
   
    
    Driver.create(req.body)
    .then(NewDriver=>{
        res.send(NewDriver);
    })
    .catch(next);

}

};