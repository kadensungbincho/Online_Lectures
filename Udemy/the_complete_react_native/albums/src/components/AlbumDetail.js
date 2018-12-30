/* eslint camelcase: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    artist, image, thumbnail_image, title, url,
  } = album;
  const {
    thumbnailStyle,
    imageStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};


AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    thumbnail_image: PropTypes.string,
    url: PropTypes.string,
  }),
};

AlbumDetail.defaultProps = {
  album: undefined,
}

export default AlbumDetail;
