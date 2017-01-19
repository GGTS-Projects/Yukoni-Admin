import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    }

  ]
};

export default routes;