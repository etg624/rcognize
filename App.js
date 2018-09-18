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

module.exports = createBottomTabNavigator({
  Auth: AuthScreen,
  EventControl: EventControlScreen,
  Settings: SettingsScreen

}, BottomTabNavigatorConfig);