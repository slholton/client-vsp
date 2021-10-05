import React from "react";
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

interface FeedProps {
    videos: video[],
    token: string,
    fetchVideos: Function,
    updateVideo: Function,
    updateOn: () => void
}

interface FeedState {

}

export type video = {
    publishDate?: any;
    title?: any;
    description?: any;
    categoryId?: any;
    playlist?: any;
    id?: any;
}

class Feed extends React.Component<FeedProps, FeedState> {

    deleteVideo = (video: video) => {
        fetch(`${APIURL}/videos/delete/${video.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(() => this.props.fetchVideos())
    }

    videoMapper = () => {
        return this.props.videos.map((video: video, index: number) => {
            return (
                <tr key={index}>
                    <th scope="row">{video.id}</th>
                    <td>{video.publishDate}</td>
                    <td>{video.title}</td>
                    <td>{video.description}</td>
                    <td>{video.categoryId}</td>
                    <td>{video.playlist}</td>
                    <td>
                        <Button className='update-video-button' onClick={() => { this.props.updateVideo(video); this.props.updateOn() }}>Update Video</Button>
                        <Button className="delete-video-button" onClick={() => { this.deleteVideo(video) }}>Delete Video</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="videoFeed">
                <div className="videoFeed">
                    <h3 className='create-video-header'>My Videos</h3>
                    <hr />
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Video Publish Date</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Playlist</th>
                            </tr>
                        </thead>
                        <tbody>{this.videoMapper()}</tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Feed;