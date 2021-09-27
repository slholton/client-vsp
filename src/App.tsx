import React from 'react';
import SiteBar from './components/home/Navbar'
import Auth from './components/auth/Auth';
import Home from './components/home/Home'

interface AppProps {

}

interface AppState {
  token: string
  sessionToken: string
}

class App extends React.Component<AppProps, AppState> {
  sessionToken: string | null | undefined;
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: " ",
      sessionToken: " "
    };
  }

  // useEffect example
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
  }

  // HELP!
  // protectedViews = () => {
  //   return (this.sessionToken === localStorage.getItem('token') 
  //   ? <Home token={this.sessionToken} />
  //   : <Auth updateToken={this.updateToken} />
  //   )}

  render() {
     return (
      <div className="App">
        <div className="App">
          <SiteBar clearToken={this.clearToken} />
          {/* {this.protectedViews} */}
        </div>
      </div>
    )
  }
}

export default App;