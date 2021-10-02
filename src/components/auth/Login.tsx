import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

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

    // handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    componentDidMount() {
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password
                }
            }),
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
                {/* <Form onSubmit={this.handleSubmit}> */}
                <Form >    
                    <FormGroup>
                        <Label htmlFor="email"> Email </Label>
                        <Input onChange={(e) => this.setState({ email: e.target.value })}
                            type="email" name="email" value={this.state.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password"> Password </Label>
                        <Input onChange={(e) => this.setState({ password: e.target.value })}
                            type="password" name="password" value={this.state.password} />
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;