import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';


const renderPlayers = (players) => {
  return players.map((player) => (
    <p key={player._id}>
      {player.name} has {player.score} point(s).
      <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
      <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
      <button onClick={() => Players.remove({_id: player._id})}>X</button>
    </p>
  ));
};

const handleSubmit = function (e) {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    })
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Kaden Sungbin Cho';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
