import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, CardSection, Card, Input } from './Components/Common';
import firebase from 'firebase';


class LoginForm extends Component {
    state = { email: '', pass: '', error: '' };
    onButtonPress() {
        const { email, pass } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .catch(() => {
                    this.setState({ error: 'Authentication failed.' });
                });
        });
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label="Email"
                    placeholder="User@gmail.com"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}                        
                    />
                </CardSection>
                <CardSection >
                <Input 
                    label="Password"
                    placeholder="Enter Your Password"
                    value={this.state.pass}
                    onChangeText={pass => this.setState({ pass })}
                    secureTextEntry

                />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection> 
                <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>    
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};
export default LoginForm;

