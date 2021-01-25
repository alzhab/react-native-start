import React from 'react';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '../../../../atoms';
import {Colors, TextFamily} from '@styles/base';


const Body = (props: {data: {title: string}, row?: boolean}) => {
  return (
    <Flex
      full={!props.row}
      styles={{
        paddingHorizontal: scaleSize(props.row ? 0 : 15),
        paddingRight: scaleSize(props.row ? 15 : 0),
        marginBottom: scaleSize(props.row ? 0 : 20)
      }}
    >
      <Text family={props.row ? TextFamily.REGULAR : TextFamily.BOLD}>
        {props.data.title}
      </Text>
    </Flex>
  );
};

export default Body;
