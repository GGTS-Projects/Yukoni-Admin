import Base from '../components/Layout/Base.jsx';
import HomePage from '../components/Home/Dashboard.jsx';
import HomePage2 from '../components/Home/Dashboard2.jsx';
import HomePage3 from '../components/Home/Dashboard3.jsx';
import GeneralForm from '../components/Forms/GeneralForm.jsx';
import LoginForm from '../components/Account/login.jsx';
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