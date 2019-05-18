import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './Components/Common';


class LoginForm extends Component {
    state = { Email: '', Pass: '' };
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label="Email"
                    placeholder="User@gmail.com"
                    value={this.state.Email}
                    onChangeText={Email => this.setState({ Email })}                        
                    />
                </CardSection>
                <CardSection >
                <Input 
                    label="Password"
                    placeholder="Enter Your Password"
                    value={this.state.Pass}
                    onChangeText={Pass => this.setState({ Pass })}
                    secureTextEntry

                />
                </CardSection>

                <CardSection> 
                    <Button>
                        Log In
                    </Button>    
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
