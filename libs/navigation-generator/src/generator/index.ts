import {IRoute} from '../types';
import generateRoute from './route';
import generateModulesIndex from './indexes/module';
import {addNavigations} from '../utils';

async function generateNavigation(data: IRoute[], genPath: string) {
  const navigations: string[] = [];

  for (const route of data) {
    await generateRoute(route, genPath);
    addNavigations(navigations, route);
  }

  await generateModulesIndex(genPath, data);

  console.log('=======NAVIVGATION ENUM=======');
  navigations.forEach((name) => {
    console.log(`${name} = '${name}',`);
  });
  console.log('=======NAVIVGATION ENUM=======');

  return;
}

export default generateNavigation;
