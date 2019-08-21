import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// const search = document.getElementsByClassName("pm-toolbar__search__input")[0];
// search.addEventListener(`submit`, e => {
//     e.preventDefault();
//     window.location.href = `https://www.bing.com/search?q=${search.value}`;
// });