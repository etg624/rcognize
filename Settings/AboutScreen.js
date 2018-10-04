'use strict';

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AboutScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.boldAbout}>Rcognize(Tm)</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    boldAbout: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 50
    }
  })
  
  export default AboutScreen;