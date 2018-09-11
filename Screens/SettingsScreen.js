import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  buttonIcon: {
      color: '#000'
  }
});
const settingsIcon = <Icon name="gear" style={styles.buttonIcon} size={25} />;
const BottomTabNavigatorConfig = {
}

class SettingsScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: settingsIcon
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}


module.exports = SettingsScreen;