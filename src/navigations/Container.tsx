import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {Onboarding} from '@modules';
import MainNavigaiton from '@navigations/Main';
import {OnboardingContext} from '@context';
import {Animated} from 'react-native';
import {observer} from 'mobx-react';
import {LoadingBig, Message} from '@components';
import {authStore, loadingStore, noticeMessageStore} from '@stores';
import AuthNavigaiton from '@navigations/Auth';
import {navigationRef} from '@navigations/RootNavigation';
import {COLORS} from '@styles/base';

const navigations = [
  {
    name: Navigations.Onboarding,
    component: Onboarding
  },
  {
    name: Navigations.Main,
    component: MainNavigaiton
  },
  {
    name: Navigations.Auth,
    component: AuthNavigaiton
  }
];

const forFade = ({ current, next }: any) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });
  
  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};


const Stack = createStackNavigator();

@observer
class Container extends Component {
  static contextType = OnboardingContext;
  
  render(): ReactElement {
    const {showOnboarding} = this.context;
    
    const isAuthorized = authStore.isAuthorized;
    
    const firstScreen = showOnboarding
      ? Navigations.Onboarding
      : isAuthorized ? Navigations.Main : Navigations.Auth;
    
    return (
      <>
        <NavigationContainer ref={navigationRef} theme={{
          dark: false,
          colors: {
            primary: COLORS.PRIMARY,
            background: COLORS.MAIN_BG,
            card: COLORS.MAIN_BG,
            text: COLORS.FONT,
            border: COLORS.BORDER,
            notification: COLORS.PRIMARY,
          }
        }}>
          <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
          }} headerMode={'none'} initialRouteName={showOnboarding ? Navigations.Onboarding : firstScreen}>
             {
              navigations.map(route => (
                <Stack.Screen options={{ headerStyleInterpolator: forFade }} key={route.name} name={route.name} component={route.component}/>
              ))
            }
          </Stack.Navigator>
        </NavigationContainer>
        
        <LoadingBig loading={loadingStore.loading}/>
        <Message show={noticeMessageStore.show} text={noticeMessageStore.text} type={noticeMessageStore.type} />
      </>
    );
  }
}

export default Container;
