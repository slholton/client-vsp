import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

interface NavbarProps {
    
}
 
interface State {
    
}
 
class Sitebar extends React.Component<NavbarProps, {}> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Virtual Studio Planner</NavbarBrand>
            </Navbar>
          );
    }
}
 
export default Sitebar;