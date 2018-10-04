'use strict';

import React from 'react';
import { Switch, StyleSheet, View, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

const styles = StyleSheet.create({
  autoSyncSwitch: {
    flexDirection: 'row',
    justifyContent: 'center',
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
            label='Hello'
          />
        </View>

      </View>
    )
  }
}


export default GeneralSettingsScreen;