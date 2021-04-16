var child_process = require('child_process');
var defer = require('q').defer();

module.exports = function () {
  console.log('Installing dependencies');

  child_process.exec('npm install', {cwd: __dirname}, function (error) {
    if (error !== null) {
      console.log('exec error: ' + error);
      defer.reject('npm installation failed');
    }
    else {
      defer.resolve();
    }
  });

  return defer.promise;
}