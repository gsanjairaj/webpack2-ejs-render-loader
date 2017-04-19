module.exports = function(source) {
    var ejs = require('ejs');
    var utils = require('loader-utils');
    var opts = utils.getOptions(this);
    var strHtml = ejs.render(source, opts);

    return strHtml;
};