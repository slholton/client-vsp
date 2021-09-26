// View after successful login. Same as WORKOUTINDEX

import React from 'react'
import Videos from '../videos/Videos'
import Playlists from '../playlist/Playlists'
import { Container, Row } from 'reactstrap'
import Sitebar from './Navbar'

interface HomeProps {
    clearToken: Function 
}

interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Sitebar clickLogout={this.props.clearToken()} />
                <Container>
                    <Row>
                        {/* <Videos /> */}
                    </Row>
                    <Row>
                        <Playlists />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;