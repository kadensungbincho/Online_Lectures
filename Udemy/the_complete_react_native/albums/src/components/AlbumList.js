import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    const albumsList = this.state.albums.map((album) => <Text>{album.title}</Text>);
    return (
      <View>
        {albumsList}
      </View>
    );
  }
}

export default AlbumList;
