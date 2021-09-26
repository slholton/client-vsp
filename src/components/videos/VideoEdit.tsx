// updating (PUT) videos

import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

interface VideoEditProps {
    updateActive: false,
    fetchVideos: Function,
    updateOff: false
}

interface VideoEditState {
    editPublishDate: Date,
    editTitle: string,
    editDescription: string,
    editCategoryId: string,
    editPlaylist: string
}

class VideoEdit extends React.Component<VideoEditProps, VideoEditState> {
    constructor(props: VideoEditProps) {
        super(props);
        this.state = {
            editPublishDate: new Date,
            editTitle: " ",
            editDescription: " ",
            editCategoryId: " ",
            editPlaylist: " "
        };
    }

    videoUpdate = (e: React.FormEvent, entry: { id: any; }) => {
        e.preventDefault();
        fetch(`http://localhost:3000/videos/update/${entry.id}`, {
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
                'Authorization': this.props.token
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
                        <Form onSubmit={this.videoUpdate}>
                            {/* <FormGroup>
                            <Label htmlFor="time"> Edit Publish Date </Label>
                            <Input onChange={(e) => this.setState({ editPublishDate: e.target.value })}
                                type="date" name="date" publishDate={this.state.editPublishDate} />
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