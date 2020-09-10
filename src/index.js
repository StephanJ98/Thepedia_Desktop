import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Suspense fallback={(<div className="row"><div className="offset-5 col-2"><p><strong>· · ·</strong></p></div></div>)}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
serviceWorker.unregister();