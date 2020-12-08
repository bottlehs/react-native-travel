// screens/AddUserScreen.js

import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class AddUserScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go to user list"
          onPress={() => this.props.navigation.navigate('UserScreen')}
          color="#19AC52"
        />
      </View>
    );
  }
}

export default AddUserScreen;
