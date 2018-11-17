import PropTypes from 'prop-types';
import React from 'react';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayer() {
		if (this.props.players.length === 0) {
			return <p>Add your first player to get started!</p>
		} else {
			return this.props.players.map((player) => <Player key={player._id} player={player}/>);
		}
  }
  render() {
		return (
			<div>
				{this.renderPlayer()}
			</div>
		)
  }
};


PlayerList.propTypes = {
	players: PropTypes.array.isRequired
}