import React, { useEffect } from 'react';
import SiteBar from './components/home/Navbar'
import Auth from './components/auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  componentDidMount() {
    if(localStorage.getItem('token')){
      this.setState({
        sessionToken: ""
      })
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      token: newToken
    })
  }

  clearToken = () => {
    localStorage.clear();
    this.updateToken(" ")
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <SiteBar clickLogout={this.clearToken} />
          <Auth updateToken={this.updateToken} />
        </div>
      </div>
    )
  }
}

export default App;