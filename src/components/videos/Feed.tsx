// Workout Table

import React from "react";
import { Table, Button } from 'reactstrap';

interface FeedProps {
    token: {},
    fetchVideos: Function
}

interface FeedState {

}

class Feed extends React.Component<FeedProps, FeedState> {
    video: any;
    deleteVideo = (video: { id: any; }) => {
        fetch(`http://localhost:3000/videos/delete/${video.id}`, {
            method: 'DELETE',
            headers: new Headers({
                // 'Content-Type': 'application/json',
                // 'Authorization': this.props.token
        })
        }).then(() => this.props.fetchVideos())
    }

    videoMapper = () => {
        return this.props.fetchVideos.map((_videos: any, index: React.Key | null | undefined) => {
            return(
                <tr key={index}>
                    <th scope="row">{this.video.id}</th>
                    <td>{this.video.publishDate}</td>
                    <td>{this.video.title}</td>
                    <td>{this.video.description}</td>
                    <td>{this.video.categoryId}</td>
                    <td>{this.video.playlist}</td>
                    <td>
                        <Button>Update Video</Button>
                        <Button onClick={() => {this.deleteVideo(this.video)}}>Delete Video</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Video Schedule Plan</h3>
                <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Publish Date</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Playlist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.videoMapper()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Feed;