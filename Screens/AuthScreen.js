'use strict';

import React from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';
import { Button } from '../Components/Button';

const styles = StyleSheet.create({
    buttonIcon: {
        color: '#000'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
    }
});



const authIcon = <Icon name="id-badge" style={styles.buttonIcon} size={25} />

class AuthScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: authIcon
    }

    state = {
        cameraType: RNCamera.Constants.Type.back,
        photoPath: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={this.state.cameraType}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-start', }}>
                    <Ionicon.Button onPress={this.flipCamera.bind(this)} name="md-reverse-camera" color="#000" backgroundColor='blue' underlayColor="transparent" size={22} iconStyle={{ marginRight: 0, color: 'white' }} padding={10} />
                    <Button
                        onPress={this.takePicture.bind(this)}
                    >VERIFY</Button>
                </View>
            </View>
        );
    }

    takePicture = async function () {
        console.log('takePicture called');
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
            this.setState({ photoPath: data.uri });
            this.uploadPhoto();
        }
    };

    uploadPhoto = async function () {

        if (this.state.photoPath != '') {

            // Create the form data object
            var data = new FormData();
            data.append('picture', {
                uri: this.state.photoPath,
                name: 'verify.jpg',
                type: 'image/jpg'
            });

            // Create the config object for the POST
            // You typically have an OAuth2 token that you use for authentication
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //  Authorization: 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH'
                },
                body: data
            };

            console.log(config);

            fetch('https://convoyer.mobsscmd.com/rcognize/verifyface', config)
                .then(responseData => {
                    // Log the response form the server
                    // Here we get what we sent to Postman back
                    console.log(responseData);
                })
                .catch(err => {
                    console.log(err);
                });
        }

    }

    flipCamera() {

        if (this.state.cameraType == RNCamera.Constants.Type.front) {
            this.setState({
                cameraType: RNCamera.Constants.Type.back
            })
        } else {
            this.setState({
                cameraType: RNCamera.Constants.Type.front
            })
        }
    }


}




module.exports = AuthScreen;