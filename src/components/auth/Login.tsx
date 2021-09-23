import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type LoginProp = {
    updateToken: Function
  }

type LoginState = {
    email: string,
    password: string
}

class Login extends React.Component<LoginProp, LoginState> {
    constructor(props: LoginProp) {
        super(props);
        this.state = {
            email: " ",
            password: " "
        };
    }

    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({ user: { email: this.state.email, password: this.state.password } }), // Good to model
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email" />
                        <Input onChange={(e) => this.setState({email: e.target.value})} // USE THIS HERE
                            type="email" name="email" value={this.state.email} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password" />
                        <Input onChange={(e) => this.setState({password: e.target.value})}
                            type="password" name="password" value={this.state.password} placeholder="Password" />
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;