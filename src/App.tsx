import React, { useEffect } from 'react';
import './App.css';
import Auth from './components/auth/Auth';

interface AppProps {
  updateToken: Function
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

  // double check this
  useEffect() {
    if(localStorage.getItem('token')){
      this.setState({
        sessionToken: ""
      })
    }
  }

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/
  // useEffect(() => {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  //   }
  // }, [])

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
          <Auth updateToken={this.props.updateToken} />
        </div>
      </div>
    )
  }
}

export default App;