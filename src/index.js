import React from 'react';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {createRoot} from 'react-dom/client';

import 'bulma/css/bulma.css';
import './styles.css';


const el = document.getElementById('root');

const root = createRoot(el);

root.render(

  <Provider store={store} >
  
  <App />

  </Provider>


);

