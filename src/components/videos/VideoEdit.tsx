import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

interface VideoEditProps {
    fetchVideos: Function,
    token: string,
    updateVideo: Function,
    updateOff: () => void,
    videoToUpdate: object
}

interface VideoEditState {
    editPublishDate: string,
    editTitle: string,
    editDescription: string,
    editCategoryId: string,
    editPlaylist: string
}

class VideoEdit extends React.Component<VideoEditProps, VideoEditState> {
    constructor(props: VideoEditProps) {
        super(props);
        this.state = {
            editPublishDate: " ",
            editTitle: " ",
            editDescription: " ",
            editCategoryId: " ",
            editPlaylist: " "
        };
    }

    handleVideoUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:3000/videos/update/${this.props.videoToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify({
                video: {
                    publishDate: this.state.editPublishDate,
                    title: this.state.editTitle,
                    description: this.state.editDescription,
                    categoryId: this.state.editCategoryId,
                    playlist: this.state.editPlaylist
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => {
            this.props.fetchVideos();
            this.props.updateOff();
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Update A Video</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleVideoUpdate}>
                            <FormGroup>
                                <Label htmlFor="date"> Edit Publish Date </Label>
                                <Input onChange={(e) => this.setState({ editPublishDate: e.target.value })}
                                    type="text" name="editPublishDate" value={this.state.editPublishDate} />
                            </FormGroup>
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
                                <Label htmlFor="categoryId"> Edit Category </Label>
                                <Input onChange={(e) => this.setState({ editCategoryId: e.target.value })}
                                    type="select" name="categoryId" value={this.state.editCategoryId}>
                                    <option value="Beginners">Beginners</option>
                                    <option value="Meditation">Meditation</option>
                                    <option value="Yoga">Yoga</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="playlist"> Edit Playlist </Label>
                                <Input onChange={(e) => this.setState({ editPlaylist: e.target.value })}
                                    type="text" name="date" value={this.state.editPlaylist} />
                            </FormGroup>
                            <Button type="submit">Submit Updates</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default VideoEdit;