import PropTypes from 'prop-types';
import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
      return (
        <div key={this.props.player._id} className="item">
          <div className="player">
            <div>
              <h3 className="player__name">{this.props.player.name}</h3>
              <p className="player__stats">
                {this.props.player.score} point(s).
              </p>
            </div>
            <div className="player__action">
              <button className="button button--round" onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: -1}})}>-1</button>
              <button className="button button--round" onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: 1}})}>+1</button>
              <button className="button button--round" onClick={() => Players.remove({_id: this.props.player._id})}>X</button>
            </div>
          </div>
        </div>
      );
  }
}


Player.propTypes = {
    player: PropTypes.object.isRequired
}