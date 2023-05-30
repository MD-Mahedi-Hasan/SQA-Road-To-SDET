const newman = require('newman');

newman.run({
    //collection: require('./Collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27539856-7ed82b15-3ed3-4134-b387-3a03d3084221?access_key=PMAT-01H1M93MK86ZX5FYWN2PME42F6',
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