import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';

const styles = StyleSheet.create({
    buttonIcon: {
        color: '#000'
    }
});

const authIcon = <Icon name="id-badge" style={styles.buttonIcon} size={25} />



class AuthScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: authIcon
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Auth</Text>
            </View>
        );
    }
}

module.exports = AuthScreen;