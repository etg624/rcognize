'use strict';

import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AboutScreen from '../Settings/AboutScreen'
import AuthRulesScreen from '../Settings/AuthRulesScreen'
import FacialRecognitionScreen from '../Settings/FacialRecognitionScreen'
 import GeneralSettingsScreen from '../Settings/GeneralSettingsScreen'


const styles = StyleSheet.create({
  buttonIcon: {
    color: '#000'
  }
});

const SettingsTabs = createMaterialTopTabNavigator({

  General: {
    screen: GeneralSettingsScreen,

    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="gears" size={23} color="#000" />)
    }
  },
  'Facial Recognition': {
    screen: FacialRecognitionScreen,

    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="eye" size={23} color="#000" />
      )
    }

  },
  'Auth Rules': {
    screen: AuthRulesScreen,

    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user-secret" size={23} color="#000" />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="info-circle" size={23} color="#000" />
      )
    }
  }
}, {
    tabBarOptions: {
      showIcon: true,
      showLabel: false
    },
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      paddingTop: 50,

    }

  });

const settingsIcon = <Icon name="gear" style={styles.actionButtonIcon} size={25} />;

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: settingsIcon
  }
    render() {
      return (
              <SettingsTabs/>
      )
    }
  }
  
    

