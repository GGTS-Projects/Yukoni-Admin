import Base from './components/Layout/Base.jsx';
import HomePage from './components/Home/HomePage.jsx';

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