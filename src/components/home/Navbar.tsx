import React from 'react';
import { Collapse, Navbar, Nav, NavItem, Button, NavbarBrand, NavbarToggler } from 'reactstrap';

interface NavbarProps {
    clickLogout: Function
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

    // componentWillUnmount() {
    //     this.props.clickLogout()
    // }

    render() { 
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Virtual Studio Planner</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button>Logout</Button> 
                            {/* <Button type="submit" onClick={this.props.clickLogout}>Logout</Button>  */}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          );
    }
}
 
export default Sitebar;