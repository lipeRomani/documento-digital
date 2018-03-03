import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DocumentRequestList from './containers/DocumentRequestList';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
)

ReactDOM.render(
  <BrowserRouter>
        <MuiThemeProvider>
            <Provider store={store}>
                <DocumentRequestList />
            </Provider>
        </MuiThemeProvider>
  </BrowserRouter>
  ,document.getElementById('root'));
registerServiceWorker();
