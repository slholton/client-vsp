import React from "react";
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

interface FeedProps {
    videos: [],
    token: string,
    fetchVideos: Function,
    updateVideo: Function,
    updateOn: () => void
}

interface FeedState {

}

class Feed extends React.Component<FeedProps, FeedState> {
    video: any;
    constructor(props: FeedProps) {
        super(props);
        this.state = {

        };
    }

    deleteVideo = (id: any) => {
        fetch(`${APIURL}/videos/delete/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(() => this.props.fetchVideos())
    }

    videoMapper = () => {
        return this.props.videos.map((video: {
            id: any;
            publishDate?: any;
            title?: any;
            description?: any;
            categoryId?: any;
            playlist?: any;
        }, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{video.id}</th>
                    <td>{video.publishDate}</td>
                    <td>{video.title}</td>
                    <td>{video.description}</td>
                    <td>{video.categoryId}</td>
                    <td>{video.playlist}</td>
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
                        <td>
                            <Button className='update-video-button' onClick={() => { this.props.updateVideo(this.video); this.props.updateOn() }}>Update Video</Button>
                            <Button className="delete-video-button" onClick={() => { this.deleteVideo(this.video) }}>Delete Video</Button>
                        </td>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Feed;