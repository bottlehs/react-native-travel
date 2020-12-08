// screens/UserScreen.js

import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class UserScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Users List"
          onPress={() => this.props.navigation.navigate('UserDetailScreen')}
          color="#19AC52"
        />
      </View>
    );
  }
}

export default UserScreen;
