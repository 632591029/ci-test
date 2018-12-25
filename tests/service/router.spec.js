const superagent = require('supertest');
const app = require('../../app');

function request() {
    return superagent(app.listen());
}

const requestProxy = request();
describe('node 接口测试', function() {
    before('must be on home page', function() {
        requestProxy.get('/')
            .expect(200, done);
    });
    it('test 接口ceshi', function(done) {
        requestProxy
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) { return done(err) };
                if (res.body.data == 'hello worlxxxd') { done() } else {
                    done(new Error('接口数据异常'));
                }
            });
    });
});