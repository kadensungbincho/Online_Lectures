import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';

const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    { children }
  </View>
);

CardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([Image, View]),
    ),
  ]),
};

CardSection.defaultProps = {
  children: undefined,
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
