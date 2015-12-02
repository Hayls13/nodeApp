var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'jAvm0dQ55CYyPnku1vTDWCIEg',
    consumer_secret: 'V8CdE8EnwrxjB2R7M9aPZslAWMhgd4RCW0uYdaJEr4EWWO6p1K',
    access_token_key: '3230306397-WwdtAd1Zx9KWD6KhdP3vZ3uPYAWXVFm2Stq5ycn',
    access_token_secret: 'kmVeJ1STFG782ewXNYPzlDyBCLhIaCg0EcYGiE9za79uc'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        response.end(JSON.stringify(tweets));
    });
}).listen(port);


var json = [];

for (var i =0; i< tweets.statuses.length ; i++)
{

    json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
}


response.end(JSON.stringify(json));