import {Navigations} from '@types';
import {StackGenerator} from '@utils';
import Home from './Home';

const navigations = [
  {
    name: Navigations.Main_Home,
    component: Home,
  },
];

export default StackGenerator(navigations);
