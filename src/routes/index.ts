import { VFC } from 'react';
import { HomePage } from '../pages';

type routeHandler = {
  path: string;
  name: string;
  render: VFC;
}

const staticRoutes: routeHandler[] = [
  { path: '/', name: 'Home', render: HomePage },
];

export default staticRoutes;
