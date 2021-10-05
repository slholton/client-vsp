import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import APIURL from '../../helpers/environment'

type RegisterProp = {
    updateToken: Function
}

type RegisterState = {
    fname: string,
    email: string,
    password: string
}

class Register extends React.Component<RegisterProp, RegisterState> {
    constructor(props: RegisterProp) {
        super(props);
        this.state = {
            fname: " ",
            email: " ",
            password: " "
        };
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    fname: this.state.fname,
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
        .catch(err => {
            console.error(err)
        })
    }

render() {
    return (
        <div>
            <Container className="register-container">
            <h1>Register</h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="fname">First Name </Label>
                    <Input onChange={(e) => this.setState({ fname: e.target.value })}
                        type="text" name="fname" value={this.state.fname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email </Label>
                    <Input onChange={(e) => this.setState({ email: e.target.value })}
                        type="email" name="email" value={this.state.email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password </Label>
                    <Input onChange={(e) => this.setState({ password: e.target.value })}
                        type="password" name="password" value={this.state.password} />
                </FormGroup>
                <Button className="register-button" type="submit">Register</Button>
            </Form>
            </Container>
        </div>
    );
}
}

export default Register;