// updating (PUT) videos
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

interface PlayProps {
    fetchPlaylists: Function,
    updateOff: false
}

interface PlayState {
    editPublishDate: Date,
    editTitle: string,
    editDescription: string,
    editStatus: string
}

class PlayUpdate extends React.Component<PlayProps, PlayState> {
    constructor(props: PlayProps) {
        super(props);
        this.state = {
            editPublishDate: new Date,
            editTitle: " ",
            editDescription: " ",
            editStatus: " "
        };
    }

    playlistUpdate = (e: React.FormEvent, playlist: { id: any; }) => {
        e.preventDefault();
        fetch(`http://localhost:3000/playlists/update/${playlist.id}`, {
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
                'Authorization': this.props.token
            })
        }).then((res) => {
            this.props.fetchPlaylists();
            this.props.updateOff();
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Update Your Playlist</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.playlistUpdate}>
                            {/* <FormGroup>
                                <Label htmlFor="time"> Edit Publish Date </Label>
                                <Input onChange={(e) => this.setState({ editPublishDate: e.target.value })}
                                    type="date" name="date" value={this.state.editPublishDate} />
                            </FormGroup> */}
                            <FormGroup>
                                <Label htmlFor="title"> Edit Title </Label>
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
                            <Button type="submit">Update Your Playlist!</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default PlayUpdate;
