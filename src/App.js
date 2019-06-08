/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import { Header, Button, Spinner } from './Components/Common';

class App extends Component {
    state = { LoggedIn: null };

    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyByqRIadsZ6a0G5ygcpKN30RUZQVh2dhy8',
            authDomain: 'reactnativeauth-531b7.firebaseapp.com',
            databaseURL: 'https://reactnativeauth-531b7.firebaseio.com',
            projectId: 'reactnativeauth-531b7',
            storageBucket: 'reactnativeauth-531b7.appspot.com',
            messagingSenderId: '1026045552334',
            appId: '1:1026045552334:web:39f42bba3eb25387'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);  
      
          firebase.auth().onAuthStateChanged((user) => {
               if (user) {
                this.setState({ LoggedIn: true });
               } else {
                this.setState({ LoggedIn: false });
               } 
          });
        }
          
    renderContent() {
        switch (this.state.LoggedIn) {
            case true:
            return (<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>);
            
            case false:
            return (<LoginForm />); 
            
            default:
            return <Spinner size="small" />;

        }     
    }    
    
    render() {
        return (
            <View>
            <Header headerText="Authentication" />
            {this.renderContent()}            
            {/* <LoginForm /> */}
            </View>
        );
    }

}

export default App;
