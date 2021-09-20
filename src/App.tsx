import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import {
  Header,
  Wrapper,
} from './components/_index';
import { Metric } from './Features/_index';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header />
        <Metric />
        <ToastContainer />
      </Wrapper>
    </MuiThemeProvider>
  </Provider>
);

export default App;
