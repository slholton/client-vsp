import React from 'react'
import Videos from '../videos/Videos'
import Playlists from '../playlist/Playlists'
import { Container, Row, Col } from 'reactstrap'
// import './Home.css'
// import Sitebar from './Navbar'

interface HomeProps {
    clearToken: () => void,
    token: string,
    updateToken: Function
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
            <div className="home-main">
                <div className="home-background">
                    {/* <Sitebar clearToken={this.props.clearToken} updateToken={this.props.updateToken} token={this.props.token} /> */}
                    <Container>
                        <Row>
                            <Col md="6">
                                <Videos token={this.props.token} />
                            </Col>
                            <Col md="6">
                                <Playlists token={this.props.token} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;