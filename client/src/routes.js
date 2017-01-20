import Base from './components/Layout/Base.jsx';
import HomePage from './components/Home/HomePage.jsx';
import HomePage2 from './components/Home/HomePage2.jsx';
import HomePage3 from './components/Home/HomePage3.jsx';
const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },{
      path: '/HomePage2',
      component: HomePage2
    },{
      path: '/HomePage3',
      component: HomePage3
    }

  ]
};

export default routes;