var assert = require('assert');
var supertest = require("supertest");
var should = require("should");


// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://ec2-52-58-80-1.eu-central-1.compute.amazonaws.com:3000");

// UNIT test begin

describe("POST Test",function(){

    it("should return status 200 (OK)",function(done){

        server
            .post('/rest/user')
            .send({
                name: "Javier",
                alias: "javil",
                surname: "Leonardi",
                age: 30,
                phone: 54567
            })
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });

});

describe("GET Test",function(){

    it("should return status 200 (OK)",function(done){

        server
            .get('/rest/user')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });

});

describe("DELETE Test",function(){

    it("should return status 200 (OK)",function(done){

        server
            .delete('/rest/user/:id')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });

});

