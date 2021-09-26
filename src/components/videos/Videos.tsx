// workoutIndex.js - SPLASH PAGE FOR VIDEO

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Planner from './Planner';
import Feed from './Feed'

interface VideosProps {
    token: string | null
}

interface VideosState {
}

class Videos extends React.Component<VideosProps, VideosState> {
    video: any;
    constructor(props: VideosProps) {
        super(props);
        this.state = {
            // video: (" ")
        };
    }

    // fetchVideos = (e: { preventDefault: () => void; }) => {
    fetchVideos = () => {
        fetch("http://localhost:3000/videos/mine", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
            .then((videoData) => {
                this.setState.video(videoData)
            })
    }

    componentDidMount() {
        this.fetchVideos()
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="9">
                            <Feed video={this.video} fetchVideos={this.fetchVideos}
                            token={this.props.token}>
                        </Col>
                        <Col md="3">
                            <Planner fetchVideos={this.fetchVideos} token={this.props.token} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Videos;