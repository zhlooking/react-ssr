import Hot from './client/Hot';
import Latest from './client/Latest';

const routes = [
  {
    path: '/',
    component: Hot,
    exact: true
  }, {
    path: '/latest',
    component: Latest,
  }
]

export default routes
