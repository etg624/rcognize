import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  buttonIcon: {
      color: '#000'
  }
});
const eventIcon  = <Icon name="group" style={styles.buttonIcon} size={25} />
const BottomTabNavigatorConfig = {
}


class EventControlScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: eventIcon
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Event Control</Text>
      </View>
    );
  }
}

module.exports = EventControlScreen;
