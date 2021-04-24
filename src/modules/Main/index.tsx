import {Navigations} from '@types';
import Home from './Home';
import {StackGenerator} from '@utils';

const navigations = [
  {
    name: Navigations.Main_Home,
    component: Home,
  },
];

export default StackGenerator(navigations);
