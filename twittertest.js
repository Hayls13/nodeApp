

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'jAvm0dQ55CYyPnku1vTDWCIEg',
    consumer_secret: 'V8CdE8EnwrxjB2R7M9aPZslAWMhgd4RCW0uYdaJEr4EWWO6p1K',
    access_token_key: '3230306397-WwdtAd1Zx9KWD6KhdP3vZ3uPYAWXVFm2Stq5ycn',
    access_token_secret: 'kmVeJ1STFG782ewXNYPzlDyBCLhIaCg0EcYGiE9za79uc'
});

client.get('search/tweets', {q: 'so'}, function(error, tweets){
    console.log(tweets);
});
