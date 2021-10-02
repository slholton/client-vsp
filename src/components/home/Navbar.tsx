import React from 'react';
import { Collapse, Navbar, Nav, NavItem, Button, NavbarBrand, NavbarToggler } from 'reactstrap';
import Login from '../auth/Login';
import Register from '../auth/Register'

interface NavbarProps {
    clearToken: () => void,
    updateToken: Function
}

interface NavbarState {
    isOpen: boolean,
    newIsOpen: boolean
}

class Sitebar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            isOpen: false,
            newIsOpen: false
        };
    }

    toggle = () => {
        this.setState({
            newIsOpen: true
        })
    }

    render() {
        return (
            <div className="Navbar">
                <div className="Navbar">
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/">Virtual Studio Planner</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar >
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button onClick={this.props.clearToken}>Logout</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Register updateToken={this.props.updateToken} />
                    <Login updateToken={this.props.updateToken} />
                </div>
            </div>
        );
    }
}

export default Sitebar;