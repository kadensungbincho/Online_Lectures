import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import React from 'react';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayer() {
		if (this.props.players.length === 0) {
			return (
				<div className="item">
					<p className="item__message">Add your first player to get started!</p>
				</div>
			);
		} else {
			return this.props.players.map((player) => <Player key={player._id} player={player}/>);
		}
  }
  render() {
		return (
			<div>
				<FlipMove maintainContainerHeight={true}>
					{this.renderPlayer()}
				</FlipMove>
			</div>
		)
  }
};


PlayerList.propTypes = {
	players: PropTypes.array.isRequired
}