import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Auth.css'
import Register from './Register';
import Login from './Login';

type AuthProp = {
    updateToken: Function
}

type AuthState = {
    token: string
    sessionToken: string
}

class Auth extends React.Component<AuthProp, AuthState> {
    constructor(props: AuthProp) {
        super(props);
        this.state = {
            token: " ",
            sessionToken: " "
        };
    }

    render() {
        return (
            <div className="auth">
                <Container className="auth-container">
                    <h1 className="auth-welcome"> Welcome to Your Video Content Planner </h1>
                    <Row className="register-row">
                        <Col md="6">
                        <Register updateToken={this.props.updateToken} />
                        </Col>
                    {/* </Row>
                    <Row className="login-row"> */}
                        <Col md="6">
                        <Login updateToken={this.props.updateToken} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Auth;