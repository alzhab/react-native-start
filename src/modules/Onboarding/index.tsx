import React, {ReactElement, useContext} from 'react';
import {AI, JC, Navigations, TextAlign} from '@types';
import {Button, Flex, Text} from '@components';
import {OnboardingContext} from '@context';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {LogoIcon} from '@icons';
import {Colors, COLORS} from '@styles/base';

const Onboarding = (): ReactElement => {
  const {hideOnboarding} = useContext(OnboardingContext);
  const navigation = useNavigation();
  
  const hide = () => {
    hideOnboarding();
    navigation.navigate(Navigations.Main);
  };
  
  return (
    <Flex size={1} ai={AI.center} jc={JC.center}>
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          borderWidth: 0
        }}
        resizeMode={'cover'}
        source={require('@assets/images/onboarding_back.jpg')}
      >
        <Flex size={1}/>
        
        <Flex
          size={1}
          ai={AI.center}
          container
        >
          
          <LogoIcon color={COLORS.FONT_LIGHT} size={56}/>
          
          <Text
            styles={{
              maxWidth: WINDOW_WIDTH * 0.7,
              marginTop: scaleSize(35),
              marginBottom: scaleSize(10)
            }}
            color={Colors.FONT_LIGHT}
            size={48}
            textAlign={TextAlign.center}>
            Welcome
            to our store
          </Text>
          
          <Text styles={{marginBottom: scaleSize(40)}} color={Colors.FONT_SECOND}>Ger your groceries in as fast as
            one hour</Text>
          
          
          <Button full click={hide} title={'Get Started'}/>
        </Flex>
      </ImageBackground>
    </Flex>
  );
};

export default Onboarding;
