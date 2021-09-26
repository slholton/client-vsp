import React from 'react';
import SiteBar from './components/home/Navbar'
import Auth from './components/auth/Auth';
import Videos from './components/videos/Videos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planner from './components/videos/Planner';

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

  // protectedViews = () => {
  //   return (this.sessionToken === localStorage.getItem('token') 
  //   ? <Videos token={this.sessionToken} />
  //   : <Auth updateToken={this.updateToken} />
  //   )}

  render() {
     return (
      <div className="App">
        <div className="App">
          <SiteBar clickLogout={this.clearToken} />
          {/* {this.protectedViews} */}
        </div>
      </div>
    )
  }
}

export default App;