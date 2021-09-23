import React, { Props } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

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

    // modeled from https://reactjs.org/docs/faq-ajax.html
    componentDidMount() { }

    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({ user: { fname: this.state.fname, email: this.state.email, password: this.state.password } }),
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
                <h1>Register</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="fname" />
                        <Input onChange={(e) => this.setState({fname: e.target.value})}
                            type="text" name="fname" value={this.state.fname} placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email" />
                        <Input onChange={(e) => this.setState({email: e.target.value})}
                            type="email" name="email" value={this.state.email} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password" />
                        <Input onChange={(e) => this.setState({password: e.target.value})}
                            type="password" name="password" value={this.state.password} placeholder="Password" />
                    </FormGroup>
                    <Button type="submit">Register</Button>
                </Form>
            </div>
        );
    }
}

export default Register;

