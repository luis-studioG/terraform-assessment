import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import store from '@/store/store';

const renderLoader = () => <p>Loading</p>;

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={renderLoader()}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
