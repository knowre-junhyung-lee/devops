const request = require('supertest');
const server = require('./http-server');
describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});
