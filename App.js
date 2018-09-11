import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from './Screens/SettingsScreen';
import EventControlScreen from './Screens/EventControlScreen';
import AuthScreen from './Screens/AuthScreen';


const BottomTabNavigatorConfig = {
}

export default createBottomTabNavigator({
  Auth: AuthScreen,
  EventControl: EventControlScreen,
  Settings: SettingsScreen

}, BottomTabNavigatorConfig);