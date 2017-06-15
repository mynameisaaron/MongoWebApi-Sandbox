const assert = require('assert');
const request = require('supertest');

const app = require('../app');
//npm run test
describe('the express app', ()=>{

    it('Handles a GET request to the API',(done)=>{
        request(app)
        .get('/api')
        .end((err,response)=>{
            assert(response.body.hi === 'there');
            done();
        });
    });

});