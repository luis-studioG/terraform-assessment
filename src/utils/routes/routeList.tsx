import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { LinkTest } from '@/pages';
import { Home } from '@/pages/Home/Home';
import { Layout } from '@/Templates/Layout/Layout';

import ROUTE_NAME from './url-constants';

const renderLoader = () => (
  <p className="bg-grey800 h-[100vh] w-full text-center text-white">Loading...</p>
);

const NotFound = lazy(() =>
  import('@/pages').then(({ NotFound }) => ({
    default: NotFound,
  })),
);

export const routeList: RouteObject[] = [
  {
    path: ROUTE_NAME.HOME,
    element: (
      <Layout privateRoute={true}>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: ROUTE_NAME.HOME,
        element: <Home />,
      },
      {
        path: ROUTE_NAME.LINK_TEST,
        element: <LinkTest />,
      },
    ],
  },
  {
    path: ROUTE_NAME.NOT_FOUND,
    element: <NotFound />,
  },
];
