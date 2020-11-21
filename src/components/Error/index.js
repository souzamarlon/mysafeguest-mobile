import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Content, Message } from './styles';

export default function Error() {
  return (
    <Container>
      <Content>
        <Icon name="alert" size={100} color="#F1FAEE" />
      </Content>
      <Message>Sorry, it is empty!</Message>
    </Container>
  );
}
