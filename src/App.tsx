import React from 'react';
import SiteBar from './components/home/Navbar'
import Auth from './components/auth/Auth';
import Home from './components/home/Home'

interface AppProps {

}

interface AppState {
  sessionToken: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
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
      sessionToken: newToken
    })
  }

  clearToken = () => {
    localStorage.clear();
  }

  protectedViews = () => {
    return (this.state.sessionToken === localStorage.getItem('token') 
    ? <Home token={this.state.sessionToken} clearToken={this.clearToken} />
    : <Auth updateToken={this.updateToken} />
    )}

  render() {
     return (
      <div className="App">
        <div className="App">
          <SiteBar clearToken={this.clearToken} updateToken={this.updateToken} />
          {this.protectedViews}
        </div>
      </div>
    )
  }
}

export default App;