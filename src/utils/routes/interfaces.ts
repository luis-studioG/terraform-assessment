import { RouteProps } from 'react-router-dom';

export interface WrapperRoutes {
  privateRoute?: boolean;
  children: React.ReactNode;
}

export type WrapperRouteProps = WrapperRoutes & RouteProps;
