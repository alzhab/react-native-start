import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {AI, JC} from '@types';
import {LogoIconColored} from '@icons';
import {COLORS} from '@styles/base';
import {Flex} from '@components';

const Header = () => {
  
  
  return (
    <Flex
      full
      ai={AI.center}
      jc={JC.center}
      size={0.4}>
    
      <Image
        style={[StyleSheet.absoluteFill, {width: '100%'}]}
        source={require('@assets/images/auth-back.jpg')}
      />
    
      <LogoIconColored color={COLORS.FONT_LIGHT} size={55} />
    </Flex>
  );
};

export default Header;
