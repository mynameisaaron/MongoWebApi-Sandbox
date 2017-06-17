const Driver = require('../models/driver');

module.exports = {
greeting : function(req,res){
    res.send({hi:'there'});
},

create : function(req,res){
   
    // // var newDriver = new Driver(req.body);
    // var newDriver = new Driver({
    //     email : req.body.email
    // });

    // newDriver.save()
    // .then(()=>{
    //     res.send(newDriver);
    // })

    Driver.create(req.body)
    .then(NewDriver=>{
        res.send(NewDriver);
    });

}

};