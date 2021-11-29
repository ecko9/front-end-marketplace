import React from 'react';
import ReactDOM from 'react-dom';
import 'style/index.scss';
import App from './App';
import ThemeCtxProvider from 'context/ThemeCtx'
ReactDOM.render(
  <React.StrictMode>
    <ThemeCtxProvider>
      <App />
    </ThemeCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);