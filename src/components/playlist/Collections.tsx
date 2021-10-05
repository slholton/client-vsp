import React from "react";
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

interface CollectionProps {
    playlists: [],
    token: string,
    fetchPlaylists: Function,
    updatePlaylist: Function,
    updateOn: () => void
}

interface CollectionState {

}

class Collections extends React.Component<CollectionProps, CollectionState> {
    playlist: any;
    constructor(props: CollectionProps) {
        super(props);
        this.state = {

        };
    }

    deletePlaylist = (playlist: { id: any; }) => {
        fetch(`${APIURL}/playlists/delete/${playlist.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(() => this.props.fetchPlaylists())
    }

    playlistMapper = () => {
        return this.props.playlists.map((playlist: {
            id: any;
            publishDate?: any;
            title?: any;
            description?: any;
            status?: any;
        }, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{playlist.id}</th>
                    <td>{playlist.publishDate}</td>
                    <td>{playlist.title}</td>
                    <td>{playlist.description}</td>
                    <td>{playlist.status}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="playlistFeed">
                <div className="playlistFeed">
                    <h3 className='create-playlist-header'>My Playlists</h3>
                    <hr />
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Playlist Publish Date</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Playlist Privacy</th>
                            </tr>
                        </thead>
                        <tbody>{this.playlistMapper()}</tbody>
                        <td>
                            <Button className='update-playlist-button' onClick={() => { this.props.updatePlaylist(this.playlist); this.props.updateOn() }}>Update Playlist</Button>
                            <Button className='delete-playlist-button' onClick={() => { this.deletePlaylist(this.playlist) }}>Delete Playlist</Button>
                        </td>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Collections;