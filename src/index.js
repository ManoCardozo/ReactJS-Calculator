import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('app'));
