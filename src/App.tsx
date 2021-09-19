import React from 'react';
// import './App.css';
import Auth from './components/auth/Auth';

let testProp: string = 'Am I getting passed to the Auth component?'
let optionalProp: string = 'Yessir!';

const App: React.FunctionComponent = () => {
    return (
      <div className="App">
        <div className="App">
          test
          <Auth testProp={testProp} optionalProp={optionalProp} />
        </div>
      </div>
    )
  }

export default App;