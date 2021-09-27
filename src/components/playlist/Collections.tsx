// Workout Table
import React from 'react';
import { Table, Button } from 'reactstrap';

interface CollectionProps {
    token: {},
    fetchPlaylists: Function,
    updatePlaylist: Function
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
        fetch(`http://localhost:3000/playlists/delete/${playlist.id}`, {
            method: 'DELETE',
            headers: new Headers({
                // 'Content-Type': 'application/json',
                // 'Authorization': this.props.token
            })
        }).then(() => this.props.fetchPlaylists())
    }

    playlistMapper = () => {
        return this.props.fetchPlaylists.map((playlist: {
            id: any;
            publishDate?: any;
            title?: any;
            description?: any;
            status?: any;
        }, index: React.Key | null | undefined) => {
            return (
                <tr key={index}>
                    <th scope="row">{playlist.id}</th>
                    <td>{playlist.publishDate}</td>
                    <td>{playlist.title}</td>
                    <td>{playlist.description}</td>
                    <td>{playlist.status}</td>
                    <td>
                        <Button onClick={() => { this.props.updatePlaylist(this.playlist); this.props.updateOn() }}>Update Playlist</Button>
                        <Button onClick={() => { this.deletePlaylist(playlist) }}>Delete Playlist</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Playlists</h3>
                <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Publish Date</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Playlist Privacy</th>
                        </tr>
                    </thead>
                    <tbody>{this.playlistMapper()}</tbody>
                </Table>
            </div>
        );
    }
}

export default Collections;
