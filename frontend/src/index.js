import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { restoreCSRF, csrfFetch } from './store/csrf';
import configureStore from './store';
import * as sessionActions from './store/session';
import NowPlayingProvider from './context/NowPlayingContext';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
    restoreCSRF();

    window.csrfFetch = csrfFetch;
    window.store = store;
    window.sessionActions = sessionActions;
}

function Root() {
    return (
        <Provider store={store}>
            <NowPlayingProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </NowPlayingProvider>
        </Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root'),
);