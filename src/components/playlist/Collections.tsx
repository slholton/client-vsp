import React from "react";
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

interface CollectionProps {
    playlists: playlist[],
    token: string,
    fetchPlaylists: Function,
    updatePlaylist: Function,
    updateOn: () => void
}

interface CollectionState {

}

export type playlist = {
    publishDate?: any;
    title?: any;
    description?: any;
    status?: any;
    id: any
}

class Collections extends React.Component<CollectionProps, CollectionState> {

    deletePlaylist = (playlist: playlist) => {
        fetch(`${APIURL}/playlists/delete/${playlist.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(() => this.props.fetchPlaylists())
    }

    playlistMapper = () => {
        return this.props.playlists.map((playlist: playlist, index: number) => {
            return (
                <tr key={index}>
                    <th scope="row">{playlist.id}</th>
                    <td>{playlist.publishDate}</td>
                    <td>{playlist.title}</td>
                    <td>{playlist.description}</td>
                    <td>{playlist.status}</td>
                    <td>
                        <Button className='update-playlist-button' onClick={() => { this.props.updatePlaylist(playlist); this.props.updateOn() }}>Update Playlist</Button>
                        <Button className='delete-playlist-button' onClick={() => { this.deletePlaylist(playlist) }}>Delete Playlist</Button>
                    </td>
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
                    </Table>
                </div>
            </div>
        );
    }
}

export default Collections;