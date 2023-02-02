import { lazy } from 'react';
// import type { RouteComponentProps, RouteProps as DefaultRouteProps } from 'react-router-dom';
// type ReactPageComponent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<unknown>;

export interface RouterConfigProps {
  path: string;
  name?: string;
  component?: any;
}

// const AccountPage = lazy(() => import("@/views/account/index"));
const AccountPage = lazy(() => import("../views/account/index"));


// TODO 添加外部的路由参数类型
const routes: RouterConfigProps[]= [
  {
    path: 'myblog/account',
    name: 'ACCOUNT',
    component: AccountPage,
  },
];

export default routes;
