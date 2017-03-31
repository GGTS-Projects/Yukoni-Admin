import Base from '../components/Layout/Base.js';
import HomePage from '../components/Home/Dashboard.js';
import HomePage2 from '../components/Home/Dashboard2.js';
import HomePage3 from '../components/Home/Dashboard3.js';
import GeneralForm from '../components/Forms/GeneralForm.js';
import LoginForm from '../components/Account/login.js';
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
    },{
      path: '/GeneralForm',
      component: GeneralForm
    },{
      path: '/Login',
      component: LoginForm
    }

  ]
};

export default routes;