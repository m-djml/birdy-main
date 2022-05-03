import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';


const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
document.title="Birdy";
