import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const NSInstance = React.lazy(() => import('./views/theme/typography/Typography'));
const Vim = React.lazy(() => import('./views/theme/VIM/Vimaccount'));
const Vnfd = React.lazy(() => import('./views/theme/VNFD/Vnfd'));
const Nsd = React.lazy(() => import('./views/theme/NSD/Nsd'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme/typography', name: 'NS Instances', component: NSInstance},
  { path: '/theme/vim', name: 'VIM Accounts', component: Vim},
  { path: '/theme/vnfd', name: 'VNF Packages', component: Vnfd},
  { path: '/theme/nsd', name: 'NS Packages', component: Nsd},

  
];

export default routes;
