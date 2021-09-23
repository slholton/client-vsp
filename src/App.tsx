import React, { useEffect } from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'


interface AppProps {

}

interface AppState {
  token: string
  sessionToken: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: " ",
      sessionToken: " "
    };
  }

  // useEffect
  componentDidMount() {
    if(localStorage.getItem('token')){
      this.setState({
        sessionToken: ""
      })
    }
  }

  //sets token for app component
  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      token: newToken
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          test
          <Auth updateToken={this.updateToken} />
        </div>
      </div>
    )
  }
}

export default App;