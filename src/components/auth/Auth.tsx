import React from 'react';
import { Container, Row, Col } from 'reactstrap';
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
            <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Register updateToken={this.props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={this.props.updateToken} />
                </Col>
            </Row>
        </Container>
          );
    }
}
 
export default Auth;

// irm + TAB = import React
// ccc + TAB = create class component
// fetch() from server