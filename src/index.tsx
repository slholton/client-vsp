import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface IndexProps {
  updateToken: Function
}

interface IndexState {
  token: string
  sessionToken: string
}

class index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      token: " ",
      sessionToken: " "
    };
  }

ReactDOM.render(
  <React.StrictMode>
    <App updateToken={this.props.updateToken} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
