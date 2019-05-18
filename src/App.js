import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import { Header } from './Components/Common';

class App extends Component {
    componentWillMount() {
        // Firebase SDK snippet CDN
       firebase.initializeApp({
        apiKey: 'AIzaSyByqRIadsZ6a0G5ygcpKN30RUZQVh2dhy8',
        authDomain: 'reactnativeauth-531b7.firebaseapp.com',
        databaseURL: 'https://reactnativeauth-531b7.firebaseio.com',
        projectId: 'reactnativeauth-531b7',
        storageBucket: 'reactnativeauth-531b7.appspot.com',
        messagingSenderId: '1026045552334',
        appId: '1:1026045552334:web:39f42bba3eb25387'
      });   
    }
    render() {
        return (
            <View>
            <Header headerText="Authentication" />
            
            <LoginForm />
            </View>
        );
    }

}

export default App;
