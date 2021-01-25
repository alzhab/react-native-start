import React from 'react';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {LogoIconColored, PinIcon} from '@icons';
import {Button, Flex, Text} from '@components';
import {scaleSize} from '@styles/mixins';
import {Colors} from '@styles/base';

const MyComponent = () => {
  return (
    <Flex full ai={AI.center} jc={JC.center} styles={{marginBottom: 20}}>
      <LogoIconColored size={30}/>
      
      <Flex dir={DIR.row} ai={AI.center}>
        <PinIcon size={17}/>
        <Text styles={{marginLeft: scaleSize(20)}} lineHeight={40}>Dhaka, Banassre</Text>
      </Flex>
    </Flex>
  );
};

export default MyComponent;
