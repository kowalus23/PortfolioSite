import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class App extends React.Component {
  render(){
    return (<div>Testing</div>)
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
