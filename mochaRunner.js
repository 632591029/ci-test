const Mocha = require('mocha');
const mocha = new Mocha({
    reporter: 'mochaawesome',
    reporterOptions: {
        reportDir: "./docs/mochaawesome-reporter"
    }
});
mocha.addFile('./tests/service/router.spec.js');
mocha.run(function(errorLength) {
    if (errorLength > 0) {
        console.log("单元测试失败😥😭");
        process.exit(1);
    } else {
        console.log("单元测试结束done🌽🌺");
        process.exit();
    }
})