define('0', ['1'], function (require, exports, module) {
    alert(require('1'));
});

define('1', ['2', '3', '10'], function (require, exports, module) {
    module.exports = require('2') + require('3') + require('10');
});

coolie.chunk(['0', '1']);
