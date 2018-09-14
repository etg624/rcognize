import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

const topTabNav = createMaterialTopTabNavigator({
  
    Auth:AuthScreen
    
  }, {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  });

export default { topTabNav };