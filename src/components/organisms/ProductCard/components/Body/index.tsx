import React from 'react';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '../../../../atoms';
import {Colors, TextFamily} from '@styles/base';


const Body = (props: {data: {title: string, amount: string}}) => {
  return (
    <Flex
      full
      styles={{
        paddingHorizontal: scaleSize(15),
        marginBottom: scaleSize(20)
      }}
    >
      <Text family={TextFamily.BOLD} styles={{marginBottom: 10}} lineHeight={18}>
        {props.data.title}
      </Text>
      <Text color={Colors.FONT_SECOND}>
        {props.data.amount}
      </Text>
    </Flex>
  );
};

export default Body;
