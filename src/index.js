import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

search.addEventListener(`submit` , e=>{
    const search = document.getElementsByClassName("pm-toolbar__search__input")[0];
    e.preventDefault();
    window.location.href=`https://www.bing.com/search?q=${search.value}`;
});