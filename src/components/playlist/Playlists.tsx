import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BuildList from './BuildList';  // Creates Playlists
import Collections from './Collections'; // Reads & Deletes Playlists
import PlayUpdate from './PlayUpdate' // Updates Playlists
import './Playlists.css'
import APIURL from '../../helpers/environment'
import { playlist } from './Collections'

interface PlaylistProps {
    token: string
}

interface PlaylistState {
    playlists: playlist[];
    updateActive: true | false,
    playlistToUpdate: playlist | null
}

class Playlists extends React.Component<PlaylistProps, PlaylistState> {
    constructor(props: PlaylistProps) {
        super(props);
        this.state = {
            playlists: [],
            updateActive: false,
            playlistToUpdate: null
        };
    }

    fetchPlaylists = () => {
        fetch(`${APIURL}/playlists/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
            .then((playlistData) => {
                this.setState({
                    playlists: playlistData
                })
            })
    }

    updatePlaylist = (playlist: playlist): void => {
        this.setState({
            playlistToUpdate: playlist
        })
    }

    updateOn = () => {
        this.setState({
            updateActive: true
        });
    }

    updateOff = () => {
        this.setState({
            updateActive: false
        });
    }

    componentDidMount() {
        this.fetchPlaylists();
    };

    render() {
        return (
            <div className="Playlists">
                <div className="Playlists">
                    <Container className='create-playlist'>
                        <Row>
                            <Col md="9">
                                <Collections playlists={this.state.playlists} updatePlaylist={this.updatePlaylist}
                                    updateOn={this.updateOn} fetchPlaylists={this.fetchPlaylists} token={this.props.token} />
                            </Col>
                            <Col md="3">
                                <BuildList fetchPlaylists={this.fetchPlaylists} token={this.props.token} />
                            </Col>
                            {this.state.updateActive && this.state.playlistToUpdate ? <PlayUpdate playlistToUpdate={this.state.playlistToUpdate}
                                updateOff={this.updateOff} token={this.props.token} fetchPlaylists={this.fetchPlaylists} /> : <> </>}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Playlists;