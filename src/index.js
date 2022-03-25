import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/Theme'
import { store } from './state/store/store'

ReactDOM.render(<React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
