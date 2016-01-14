//Get this data from your twitter apps dashboard
    var config = {
    "consumerKey": "vKIaysRNtXw5VxpGV3NlcAI6N",
    "consumerSecret": "L7uvXAJJSlyAXn1OnjAeIrSAArfRPNKk3aCbspDt1vMfTi3FVy",
    "accessToken": "4503881386-PvJFHiNRQPhyEVjlzAE9dNzVNRNuA2OHr0Rwiti",
    "accessTokenSecret": "0DuSSRasU42C82FhIQZI60SU8of7JJT9QGLxnNRmCV3bo",
}

var express = require('express');
var app = express();

    var tweets;
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;

var twitter = new Twitter(config);
    tweets = twitter.getMentionsTimeline({ count: '1'}, error, success);
    
app.get('/', function (req, res) {
    res.send('coucou');
        res.json(tweets);
});


//Callback functions




app.listen(3000, function () {
    console.log('message dans le terminal!');
});
