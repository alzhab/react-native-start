import React from 'react';
import {AI, DIR, JC} from '@types';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '../../../../atoms';
import {Button} from '../../../../molecules';
import {PlusIcon} from '@icons';
import {COLORS} from '@styles/base';

const Footer = (props: {price: number}) => {
  return (
    <Flex
      full
      ai={AI.center}
      jc={JC.spaceBetween}
      dir={DIR.row}
      styles={{
        paddingHorizontal: scaleSize(15),
      }}
    >
      <Text size={18}>${props.price}</Text>
    
      <Button
        empty
        styles={{
          borderRadius: scaleSize(14),
          paddingHorizontal: scaleSize(14),
          paddingVertical: scaleSize(14),
        }}
        click={() => {}}
      >
        <PlusIcon color={COLORS.FONT_LIGHT} size={17} />
      </Button>
    </Flex>
  );
};

export default Footer;
