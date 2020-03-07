import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n.js';
import Loader from './Components/Loader.js'

WebFont.load({
    google: {
        families: ['Montserrat:300,400,500,700', 'sans-serif']
    }
});

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
