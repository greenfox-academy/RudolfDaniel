'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use('/', express.static('Public'));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'foxitplayer',
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Foxplayer.html');
});

const playlists = [
  { 'id': 0, 'title': 'All tracks', 'system': 1},
  { 'id': 1, 'title': 'Favorites', 'system': 1},
  { 'id': 2, 'title': 'Test', 'system': 0},
]

const songs = [
  { 'id': 0, 'title': 'I walk the line', 'duration': 161, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/I Walk the Line.mp3'},
  { 'id': 1, 'title': 'Cocaine Blues', 'duration': 184, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/Cocaine Blues.mp3'},
  { 'id': 2, 'title': 'Blue Christmas', 'duration': 142, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/Blue christmas.mp3'},
  { 'id': 3, 'title': 'Ghost Riders in the Sky', 'duration': 226, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/Ghost Riders in the Sky.mp3'},
  { 'id': 4, 'title': 'Ring of Fire', 'duration': 153, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/Ring of Fire.mp3'},
  { 'id': 5, 'title': 'Tennessee Stud', 'duration': 184, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/Tennessee Stud.mp3'},
  { 'id': 6, 'title': 'The Little Drummer Boy', 'duration': 157, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/The Little Drummer Boy.mp3'},
  { 'id': 7, 'title': 'The Mercy Seat', 'duration': 295, 'path': 'c:/Saját/Greenfox/RudolfDaniel/[week-10]/Foxplayer/Public/Music/Johnny Cash/The Mercy Seat.mp3'},
]

app.get('/playlists', (req, res) => {
  conn.query('SELECT * FROM playlists;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});

app.get('/songs', (req, res) => {
  conn.query('SELECT * FROM tracks;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
  res.json(rows);
})
});

app.post('/playlists', (req, res) => {
/*  conn.query(`INSERT INTO playlists (Playlist, System) VALUES (${req.body.title}, 0)`, (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);*/
  let newPlayList = { 'id': playlists.length, 'title': req.body.title, 'system': 0 };
  playlists.push(newPlayList);
  res.json(newPlayList);
});

app.listen(8000);