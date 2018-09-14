import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AuthScreen from './AuthScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
    justifyContent: 'space-between',
    backgroundColor: 'blue'

  },
  topToolbar: {
    backgroundColor: 'blue',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.1
  },
  
  // Floating Action Button
  actionButtonIcon: {
    color: '#000'
  },
  actionButtonSpinner: {
    marginLeft: -2,
    marginTop: -2
  },
  // Map overlay styles
  marker: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 0,
    zIndex: 0,
    width: 32,
    height: 32
  },
  geofenceHitMarker: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    zIndex: 10,
    width: 12,
    height: 12
  },
  markerIcon: {
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'red',
    width: 4,
    height: 4,
    borderRadius: 5
  },
  incidentButton: {
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  switchContainer: {

  },
  patrolStartButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  }
});

const settingsIcon = <Icon name="gear" style={styles.actionButtonIcon} size={25} />;

class SettingsScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: settingsIcon
  }


  render() {
    return (
      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

module.exports = createMaterialTopTabNavigator({
  
  'Settings': SettingsScreen,
  'Auth' : AuthScreen
  
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
      height: 50, 
      padding: 0, 
      margin: 20
    },
  }
});




export default  SettingsScreen;
