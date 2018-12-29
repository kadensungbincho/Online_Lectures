import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = ({ album }) => (
  <View>
    <Text>{album.title}</Text>
    <Text>{album.title}</Text>
  </View>
);


AlbumDetail.propTypes = {
  album: PropTypes.shape.isRequired,
}

export default AlbumDetail;
