import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const init = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  return root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

export default init;
