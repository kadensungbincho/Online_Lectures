import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Lauroen',
  score: 99
}, {
  _id: '2',
  name: 'Cory',
  score: -1
}, {
  _id: '3',
  name: 'Kaden',
  score: -12
}];

const renderPlayers = function (players) {
  return players.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function () {
  let title = 'Score Keep';
  let name = 'Kaden Sungbin Cho';
  let jsx = (
    // title -> Account Settings
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
