const newman = require('newman');

newman.run({
    collection: require('./Collection/dmoney.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function(err){
    if(err) { throw err; }
    console.log('collection run complete!');
});