// workoutIndex.js - SPLASH PAGE FOR VIDEO

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BuildList from './BuildList'

interface PlaylistProps {
    token: string
}

interface PlaylistState {
    playlists: []

}

class Playlists extends React.Component<PlaylistProps, PlaylistState> {
    constructor(props: PlaylistProps) {
        super(props);
        this.state = {
            playlists: ([])
        };
    }

        fetchPlaylists = () => {
            fetch("http://localhost:3000/playlists/mine", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.token}`
                })
            }).then((res) => res.json())
                .then((playlistData) => {
                    this.setState.playlists(playlistData)
                })
        }

        componentDidMount() {
            this.fetchPlaylists();
        }

    render() {
        return (
            <div className="Playlists">
                <div className="Playlists">
                    <Container>
                        <Row>
                            <Col md="9">
                                <h2>Add a playlist to see the table.</h2>
                            </Col>
                            <Col md="3">
                                <BuildList fetchPlaylists={this.fetchPlaylists} token={this.props.token} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Playlists;