var path = require('path');
var rootPath = path.normalize(__dirname+"../../../");

module.exports = {
    development: {
        rootPath:rootPath,
        db:"mongodb://localhost/mean",
        port:process.env.PORT || 3030
    },
    production: {
        rootPath:rootPath,
        db:'mongodb://tang:tangzx711@ds015403.mlab.com:15403/mean',
        port:process.env.PORT || 80

    }
}