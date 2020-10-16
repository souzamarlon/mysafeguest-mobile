import React from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ fontSize, children, loading, icon, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <>
          <Text style={{ fontSize }}>{children}</Text>
          {icon && <Icon name={icon} size={25} color="#fff" />}
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  icon: null,
};
