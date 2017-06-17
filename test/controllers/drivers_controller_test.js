const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

const mongoose = require('mongoose');
const Driver = mongoose.model('driver');




describe("Testing for the driver controller",()=>{

beforeEach(done=>{
    const drivers = mongoose.connection.collections.drivers;
    drivers.drop()
    .then(()=>{done()});
});




    it("POST new driver",(done)=>{
        
        Driver.count().then(initialDriverCount=>{

            //this is 'supertest'
        request(app)
        .post('/api/drivers')
        .send({email:'aaronbrightman1@gmail.com'})
        .end(()=>{
            Driver.count().then(newDriverCount=>{
                assert(initialDriverCount + 1 === newDriverCount);
                done();
            });
            
        });    



        });

        
    });
});