// User Register and Login Page

import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
};

type AuthState = {
    fname: string,
    email: string,
    password: string
}
 
class Auth extends React.Component<AcceptedProps, AuthState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = { 
            fname: "",
            email: "",
            password: ""
        }
    }

    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch('http://localhost:3000/user/register',)
    // }

    authFname: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({fname: e.currentTarget.value})
    }

    authEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({email: e.currentTarget.value})
    }

    authPassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({password: e.currentTarget.value})
    }

    render() { 
        return (
            <div className="main">
                <div className="registerUser">
                <h4>Sign Up</h4>
                <Form>
                    <FormGroup>
                    <input type="fname" value={this.state.fname} placeholder="First Name" onChange={this.authFname}></input>
                    </FormGroup>
                    <FormGroup>
                    <input type="email" value={this.state.email} placeholder="Email Address" onChange={this.authEmail}></input>
                    </FormGroup>
                    <FormGroup>
                    <input type="password" value={this.state.password} placeholder="Set Password" onChange={this.authPassword}></input>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>    
                </div>
                <div className="loginUser">
                <h4>Log In</h4>
                <Form>
                    <FormGroup>
                    <input type="email" value={this.state.email} placeholder="Email Address" onChange={this.authEmail}></input>
                    </FormGroup>
                    <FormGroup>
                    <input type="password" value={this.state.password} placeholder="Set Password" onChange={this.authPassword}></input>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>    
                </div>
            </div>
          );
    }
}
 
export default Auth;

// irm + TAB = import React
// ccc + TAB = create class component
// fetch() from server