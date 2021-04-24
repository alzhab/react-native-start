import Signin from './Signin';
import Signup from './Signup';
import {Navigations} from '@types';
import {StackGenerator} from '@utils';

const navigations = [
  {
    name: Navigations.Auth_SignIn,
    component: Signin,
  },
  {
    name: Navigations.Auth_SignUp,
    component: Signup,
  },
];

export default StackGenerator(navigations);
