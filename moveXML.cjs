const fs = require('fs');

fs.rename('./_site/feed/index.html', './_site/feed.xml', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
console.log('XML file copied');