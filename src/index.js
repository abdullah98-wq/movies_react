import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';


import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>  
    ,

  document.getElementById('root')
);

