import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store/store'
import {Provider} from 'react-redux'
import { theme } from './theme';
import {  ThemeProvider } from '@material-ui/core/styles'



ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

