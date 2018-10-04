'use strict';

import React from 'react';
import { Switch, StyleSheet, View, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

const styles = StyleSheet.create({
  autoSyncSwitch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  textStyle: {
    paddingRight: 40

  }
})

class GeneralSettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.onControlChange = this.onControlChange.bind(this);
  }

  onControlChange(value) {
    return this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const syncIntervalData =[{
      value: '30 seconds'
    }, {
      value: '60 seconds'
    }, {
      value: '90 seconds'
    }, {
      value: '120 seconds'
    }, {
      value: '150 seconds'
    }]
    return (
      <View >
        <View style={styles.autoSyncSwitch}>
          <Text style={styles.textStyle}>Auto-Sync</Text>
          <Switch
            onValueChange={this.onControlChange}
            value={this.state.isOpen}
          />
        </View>
        <View>
          <Dropdown
            label='Sync Interval'
            data={syncIntervalData}
            rippleInsets={{ top: 60, bottom: 0, left: 0, right: 0 }}
            containerStyle={{ width: 150, height: 40 }}
          
            dropdownPosition={1}
            itemColor="rgba(0, 0, 0, .87)"
            pickerStyle={{
              width: 128,
          
              left: 0,
              right: null,
          
              marginRight: 8,
              marginTop: 90
            }}
          />
        </View>

      </View>
    )
  }
}


export default GeneralSettingsScreen;