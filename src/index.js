import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Para configurar o React Router deve-se apenas envolver o App entre as Tags do BrowserRouter para que todas as rotas do App funcionem*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

