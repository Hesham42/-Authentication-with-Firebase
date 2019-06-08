/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, CardSection, Card, Input, Spinner } from './Components/Common';
// eslint-disable-next-line import/imports-first
import firebase from 'firebase';


class LoginForm extends Component {
    state = { email: '', pass: '', error: '', Loading: false };
    onButtonPress() {
        const { email, pass } = this.state;
        this.setState({ error: '', Loading: true });

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onCreateUser.bind(this));
    }
    
    renderButton() {
        if (this.state.Loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button> 
            );
    }

    onCreateUser() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
        .then(this.onLoginSuccess.bind(this))  
        .catch(this.onLoginFail.bind(this));
    }
    onLoginSuccess() {
        this.setState({
            email: '', 
            pass: '',
            error: '', 
            Loading: false                
        });
    }
    onLoginFail() {
        this.setState({
            email: '', 
            pass: '',
            error: 'Authentication failed.', 
            Loading: false                
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
                  {this.renderButton()}
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

