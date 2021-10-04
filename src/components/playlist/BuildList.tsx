import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment'

interface ListProps {
    token: string,
    fetchPlaylists: Function 
}
 
interface ListState {
    publishDate: string,
    title: string,
    description: string,
    status: string    
}
 
class BuildList extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
        this.state = {
            publishDate: " ",
            title: " ",
            description: " ",
            status: " "  
          };
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${APIURL}/playlists/insert`, {
            method: 'POST',
            body: JSON.stringify({
                playlist: {
                    publishDate: this.state.publishDate,
                    title: this.state.title,
                    description: this.state.description,
                    status: this.state.status
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
        .then((playlistData) => {
            this.setState({
                publishDate: " "
            });
            this.setState({
                title: " "
            });
            this.setState({
                description: " "
            });
            this.setState({
                status: " "
            })
            this.props.fetchPlaylists(playlistData)
        })
    }

    render() { 
        return (
            <div>
                <h3 className='create-header'>Create a Playlist</h3>
                <Form className='create-playlist-form' onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="date"> Playlist Publish Date </Label>
                        <Input onChange={(e) => this.setState({ publishDate: e.target.value })}
                            type="text" name="publishDate" publishDate={this.state.publishDate} />
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
                    <Label htmlFor="status"> Status </Label>
                        <Input onChange={(e) => this.setState({ status: e.target.value })}
                            type="select" name="status" value={this.state.status}> 
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                            <option value="Unlisted">Unlisted</option>
                        </Input>
                    </FormGroup>
                    <Button className='submit-playlist-button' type="submit">Add Playlist</Button>
                </Form>
            </div>
          );
    }
}
 
export default BuildList;