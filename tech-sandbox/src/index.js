import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AppLayout } from './layout';

ReactDOM.render(<AppLayout />, document.getElementById('root'));

serviceWorker.unregister();
