var fs = require('fs'),
    mp3skull = require('./');

mp3skull('the beatles hello goodbye', function (err, tracks) {
    if (!err) {
        tracks[0].song.pipe(fs.createWriteStream('hello goodbye.mp3'));
    }
});

