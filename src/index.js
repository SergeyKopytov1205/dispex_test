import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
`

ReactDOM.render(
  <Provider store={store}>
    <>
      <Global />
      <App />
    </>
  </Provider>,
  document.getElementById('root')
);

