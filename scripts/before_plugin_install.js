var fs = require('fs');
var path = require("path");
var utilities = require("./lib/utilities");

module.exports = function(context) {
  console.log('Extracting Firebase configuration files');

  const resourcesPath = path.join(context.opts.projectRoot, "www");
  const zipPath = path.join(resourcesPath, utilities.getAppId() + ".firebase", "google-services.zip");

  console.log(fs.existsSync(zipPath));
  utilities.extractZip(zipPath, "www");
}