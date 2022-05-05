import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getAllUsers } from "./actions/allusers_actions";
//dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllMessages } from './actions/allmsg_actions';
import { getOneUserMessages } from './actions/message_actions';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getAllUsers());
store.dispatch(getAllMessages());
store.dispatch(getOneUserMessages());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
document.title="Birdy";
