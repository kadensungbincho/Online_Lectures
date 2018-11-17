import PropTypes from 'prop-types';
import React from 'react';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';


export default class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar title={this.props.title} subtitle="Considered by Kaden Cho"/>
        <PlayerList players={this.props.players}/>
        <AddPlayer />
			</div>
		);
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
}