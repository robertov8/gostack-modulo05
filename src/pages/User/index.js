import React, { Component } from 'react';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ route }) => ({
    title: route.params.user.name,
  });

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { route } = this.props;
    const user = route.params.user;
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });

    console.tron.log(this.state.stars);
  }

  render() {
    const { route } = this.props;
    const { stars } = this.state;

    const user = route.params.user;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}
