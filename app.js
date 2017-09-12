const path = require('dotenv').config();

const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var _stream;

io.on('connection', function (socket) {
    socket.on('search', function (txt) {
        getTwit(txt);
    });

    socket.on('disconnect', function() {
      if(_stream) _stream.destroy();
      console.log('disconnected.');
    });
});

function getTwit(txt){
client.stream('statuses/filter', { track: txt }, function (stream) {
    if(_stream) _stream.destroy();
    _stream = stream;

    stream.on('data', function (tweet) {
//        console.log(tweet);
        io.emit('message', tweet);
    });

    stream.on('error', function (error) {
        console.log(error);
        io.emit('message', 'Server is busy. Wait a moment.');
    });
});
}

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/aseets'));
app.set('views', __dirname + '/views');

http.listen(port, function () {
    console.log('listening on *:' + port);
});
