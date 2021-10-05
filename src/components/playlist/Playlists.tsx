import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BuildList from './BuildList';  // Creates Playlists
import Collections from './Collections'; // Reads & Deletes Playlists
import PlayUpdate from './PlayUpdate' // Updates Playlists
import './Playlists.css'
import APIURL from '../../helpers/environment'

interface PlaylistProps {
    token: string
}

interface PlaylistState {
    playlists: [];
    updateActive: true | false,
    playlistToUpdate: {}

}

class Playlists extends React.Component<PlaylistProps, PlaylistState> {
    playlistToUpdate: any;
    updateActive: any;
    constructor(props: PlaylistProps) {
        super(props);
        this.state = {
            playlists: [],
            updateActive: false,
            playlistToUpdate: {}
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

        updatePlaylist = (playlist: any) => {
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
        }

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
                        {this.updateActive ? <PlayUpdate updatePlaylist={this.playlistToUpdate} updateOff={this.updateActive.updateOff} 
                        token={this.props.token} fetchPlaylists={this.fetchPlaylists} playlistToUpdate={this.playlistToUpdate} /> : <> </>}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Playlists;