import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

console.log(navigator.serviceWorker)

const localeMessages = function(){
    if(navigator.language.startsWith("es")){
        return localeEsMessages;
    }
    else{
        return localeEnMessages;
    }
}

addLocaleData([...esLocaleData, ...enLocaleData]);
ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={localeMessages(navigator.language)}>
        <App />
    </IntlProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
