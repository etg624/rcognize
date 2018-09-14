import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AuthScreen from './AuthScreen';
import EventControlScreen from './EventControlScreen'
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  buttonIcon: {
      color: '#000'
  }
});

const SettingsTabs = createMaterialTopTabNavigator({

    'Event Control': EventControlScreen,
    'Auth': AuthScreen
  
  }, {
      lazy: true,
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
  
          width: 100,
        },
        style: {
          borderRadius: 4000,
          backgroundColor: '#009999',
          height: 50,
          padding: 0,
          margin: 20
        },
      }
    });
  
    const settingsIcon = <Icon name="gear" style={styles.actionButtonIcon} size={25} />;
  
    export default class SettingsScreen extends React.Component {

      
      
        static navigationOptions = {
          tabBarIcon: settingsIcon
        }
      

      render() {
        return <SettingsTabs />;
      }
    }
  