import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import MainBottomBarNavigaiton from '@navigations/MainBottomBar';

const navigations = [
  {
    name: Navigations.MainBotttomBar,
    component: MainBottomBarNavigaiton
  },

];

const Stack = createStackNavigator();

const MainNavigaiton = (): ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>
      {
        navigations.map(route => (
          <Stack.Screen key={route.name} name={route.name} component={route.component} />
        ))
      }
    </Stack.Navigator>
  )
};

export default MainNavigaiton

