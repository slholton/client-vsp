import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Planner from './Planner';  // Creates Videos
import Feed from './Feed'; // Reads & Deletes Videos
import VideoEdit from './VideoEdit'; // Updates Videos

interface VideosProps {
    token: string
}

interface VideosState {
    videos: [],
    updateActive: true | false,
    videoToUpdate: object
}

class Videos extends React.Component<VideosProps, VideosState> {
    updateActive: any;
    videoToUpdate: any;
    constructor(props: VideosProps) {
        super(props);
        this.state = {
            videos: [],
            updateActive: (false),
            videoToUpdate: ({})
        };
    }

    fetchVideos = () => {
        fetch("http://localhost:3000/videos/mine", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
            .then((videoData) => {
                this.setState({
                    videos: videoData
                })
            })
    }

    updateVideo = (video: any) => {
        this.setState({
            videoToUpdate: video
        })
    }

    updateOn = () => {
        this.setState({
            updateActive: true
        });
    }

    updateOff = () => {
        this.setState({
            updateActive: false
        });
    }

    componentDidMount() {
        this.fetchVideos()
    }

    render() {
        return (
            <div className="Videos">
                <div className="Videos">
                    <Container>
                        <Row>
                            <Col md="9">
                                <Feed videos={this.state.videos} updateVideo={this.updateVideo}
                                    updateOn={this.updateOn} fetchVideos={this.fetchVideos} token={this.props.token} />

                            </Col>
                            <Col md="3">
                                <Planner fetchVideos={this.fetchVideos} token={this.props.token} />
                            </Col>
                            {this.updateActive ? <VideoEdit updateVideo={this.videoToUpdate}
                                updateOff={this.updateActive.updateOff} token={this.props.token} fetchVideos={this.fetchVideos} videoToUpdate={this.videoToUpdate} /> : <></>}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Videos;