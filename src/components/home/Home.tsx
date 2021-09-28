// View after successful login. Same as WORKOUTINDEX

import React from 'react'
import Videos from '../videos/Videos'
import Playlists from '../playlist/Playlists'
import { Container, Row } from 'reactstrap'
import Sitebar from './Navbar'

interface HomeProps {
    clearToken: Function,
    token: string 
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
                <Sitebar clearToken={this.props.clearToken()} />
                <Container>
                    <Row>
                        <Videos token={this.props.token} />
                    </Row>
                    <Row>
                        <Playlists token={this.props.token} />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;