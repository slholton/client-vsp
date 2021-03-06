import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../helpers/environment'
import { playlist } from './Collections'

interface PlaylistEditProps {
    fetchPlaylists: () => void,
    token: string,
    updateOff: () => void,
    playlistToUpdate: playlist
}

interface PlaylistEditState {
    editPublishDate: string,
    editTitle: string,
    editDescription: string,
    editStatus: string,
    modalIsOpen: boolean
}

class PlayUpdate extends React.Component<PlaylistEditProps, PlaylistEditState> {
    constructor(props: PlaylistEditProps) {
        super(props);
        this.state = {
            editPublishDate: " ",
            editTitle: " ",
            editDescription: " ",
            editStatus: " ",
            modalIsOpen: true
        };
    }

    handlePlaylistUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${APIURL}/playlists/update/${this.props.playlistToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                playlist: {
                    publishDate: this.state.editPublishDate,
                    title: this.state.editTitle,
                    description: this.state.editDescription,
                    status: this.state.editStatus
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => {
            this.props.fetchPlaylists();
            this.props.updateOff();
        })
    }

    modalToggle = () => {
        this.setState({
            modalIsOpen: false
        })
        this.props.updateOff()
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Update Your Playlist</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handlePlaylistUpdate}>
                            <FormGroup>
                                <Label htmlFor="date"> Edit Playlist Publish Date </Label>
                                <Input onChange={(e) => this.setState({ editPublishDate: e.target.value })}
                                    type="text" name="editPublishDate" value={this.state.editPublishDate} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="title"> Edit Playlist Title </Label>
                                <Input onChange={(e) => this.setState({ editTitle: e.target.value })}
                                    type="text" name="title" value={this.state.editTitle} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description"> Edit Description </Label>
                                <Input onChange={(e) => this.setState({ editDescription: e.target.value })}
                                    type="text" name="description" value={this.state.editDescription} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="status"> Status </Label>
                                <Input onChange={(e) => this.setState({ editStatus: e.target.value })}
                                    type="select" name="status" value={this.state.editStatus}>
                                    <option value="Private">Private</option>
                                    <option value="Public">Public</option>
                                    <option value="Unlisted">Unlisted</option>
                                </Input>
                            </FormGroup>
                            <Button type="submit">Update Playlist!</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default PlayUpdate;
