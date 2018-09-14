import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Screens/SettingsScreen'
import AuthScreen from './Screens/AuthScreen';
import EventControlScreen from './Screens/EventControlScreen'


const BottomTabNavigatorConfig = {
}

const RootStack = createBottomTabNavigator({
  Auth: AuthScreen,
  'Event Control': EventControlScreen,
  Settings: SettingsScreen

}, BottomTabNavigatorConfig);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}