import React, {ReactElement} from 'react';
import {Navigations} from '@types';
import {Start} from '@modules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from '@icons';
import BottomBar from '@navigations/components/BottomBar';

const navigations = [
  {
    name: Navigations.Start,
    component: Start,
    Icon: HomeIcon
  },
];

const Bottombar = createBottomTabNavigator();

const MainBottomBarNavigaiton = (): ReactElement => {
  return (
    <Bottombar.Navigator tabBar={BottomBar}>
      {
        navigations.map(route => (
          <Bottombar.Screen
            options={{
              // @ts-ignore
              Icon: route.Icon,
              title: 'Home'
            }}
            key={route.name}
            name={route.name}
            component={route.component} />
        ))
      }
    </Bottombar.Navigator>
  )
};

export default MainBottomBarNavigaiton
