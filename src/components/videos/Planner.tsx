import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment'

interface PlannerProps {
    token: string,
    fetchVideos: Function    
}
 
interface PlannerState {
    publishDate: string,
    title: string,
    description: string,
    categoryId: string,
    playlist: string    
}
 
class Planner extends React.Component<PlannerProps, PlannerState> {
    constructor(props: PlannerProps) {
        super(props);
        this.state = { 
            publishDate: " ",
            title: " ",
            description: " ",
            categoryId: " ",
            playlist: " "
          };
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${APIURL}/videos/insert`, {
            method: 'POST',
            body: JSON.stringify({
                video: {
                    publishDate: this.state.publishDate,
                    title: this.state.title,
                    description: this.state.description,
                    categoryId: this.state.categoryId,
                    playlist: this.state.playlist
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(
            (res) => res.json()
        ).then((videoData) => {
            this.setState({
                publishDate: " " 
            });
            this.setState({
                title: " "
            })
            this.setState({
                description: " "
            });
            this.setState({
                categoryId: " "
            });
            this.setState({
                playlist: " "
            });
            this.props.fetchVideos(videoData)
        })
    }

    render() { 
        return (
            <div>
                <h3 className='create-header'>Schedule Your Video Content </h3>
                <Form className='create-form' onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="date"> Video Publish Date </Label>
                        <Input onChange={(e) => this.setState({ publishDate: e.target.value })}
                            type="text" name="publishDate" value={this.state.publishDate} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="title"> Title </Label>
                        <Input onChange={(e) => this.setState({ title: e.target.value })}
                            type="text" name="title" value={this.state.title} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description"> Description </Label>
                        <Input onChange={(e) => this.setState({ description: e.target.value })}
                            type="text" name="description" value={this.state.description} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="categoryId"> Category </Label>
                        <Input onChange={(e) => this.setState({ categoryId: e.target.value })}
                            type="select" name="categoryId" value={this.state.categoryId}> 
                            <option value="Beginners">Beginners</option>
                            <option value="Meditation">Meditation</option>
                            <option value="Yoga">Yoga</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="playlist"> Playlist </Label>
                        <Input onChange={(e) => this.setState({ playlist: e.target.value })}
                            type="text" name="date" value={this.state.playlist} />
                    </FormGroup>
                    <Button className='sub-button' type="submit">Add Video to Planner</Button>
                </Form>
            </div>
          );
    }
}
 
export default Planner;