import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import {BrowserRouter} from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancers);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app , document.getElementById('root'));
