import React, {ReactElement} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {Login, Signup} from '@modules';

const navigations = [
	{
		name: Navigations.Login,
		component: Login
	},
  {
    name: Navigations.Signup,
    component: Signup
  },
];

const Stack = createStackNavigator();

const AuthNavigaiton = (): ReactElement => {
	return (
		<Stack.Navigator headerMode={'none'} screenOptions={{
		  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
    }}>
			{
				navigations.map(route => (
					<Stack.Screen key={route.name} name={route.name} component={route.component} />
				))
			}
		</Stack.Navigator>
	)
};

export default AuthNavigaiton
