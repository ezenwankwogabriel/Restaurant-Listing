import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextProvider from './Store';

function Index() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}

ReactDOM.render( <Index />, document.getElementById('root'));

