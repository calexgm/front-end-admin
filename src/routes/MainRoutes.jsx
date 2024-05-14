import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// Paginas admin
const User = Loadable(lazy(() => import('pages/admin/User')));
const Client = Loadable(lazy(() => import('pages/admin/Client')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'users',
      element: <User />
    },
    {
      path: 'clients',
      element: <Client />
    },
  ]
};

export default MainRoutes;
