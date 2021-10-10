process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect;
const { before,after } = require('mocha');

describe('Testing RESTful API', function() {
    
    before(() => {
        app = require("../server");
        chaiServer = chai.request(app).keepOpen();
      });
    
    describe("GET /", function() {
        it("responds with a welcome message", function() {
            chai.request(app)
                .get('/api')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.eql('Welcome to Attractions Service!');
                });
        });
    });

    describe("GET /token", function() {
        it("responds with access token", function() {
            chai.request(app)
            .get('/api/token')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                token = res.body.token;
                expect(token.length).to.not.eql(0);
            });
        });
    });

    describe("GET /attractions", function() {
        it("responds with attractions list", function() {
            chai.request(app)
            .get('/api/attractions?longitude=34.827003&latitude=32.09943')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                expect(res.body.length).to.not.eql(0);
            });
        });
    });

    describe("GET /attraction types", function() {
        it("responds with attraction types", function() {
            chai.request(app)
            .get('/api/attractions/type')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                expect(res.body.length).to.not.eql(0);
            });
        });
    });


    after(() => {
        chaiServer.close();
        process.emit('SIGTERM');
      });
});