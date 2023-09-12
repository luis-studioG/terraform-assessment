import { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga4';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { routeList } from '../utils/routes/routeList';

import 'react-toastify/dist/ReactToastify.min.css';
ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID');
ReactGA.send(window.location.pathname + window.location.search);

const App = () => {
  const RenderRouter: FC = () => {
    const element = useRoutes(routeList);
    return element;
  };
  return (
    <BrowserRouter>
      <CookiesProvider>
        <RenderRouter />
      </CookiesProvider>
      <ToastContainer limit={1} />
    </BrowserRouter>
  );
};

export default App;
