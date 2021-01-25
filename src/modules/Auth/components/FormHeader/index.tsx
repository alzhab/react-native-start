import React, {useEffect, useState} from 'react';
import {scaleSize} from '@styles/mixins';
import {Colors} from '@styles/base';
import {AnimateItTiming, Flex, Text} from '@components';

const FormHeader = (props: {title: string, desc: string}) => {
  return (
    <Flex full styles={{marginBottom: scaleSize(10)}}>
      <Text styles={{marginBottom: scaleSize(15)}}>
        <Text size={26}>{props.title}</Text>
      </Text>
      <Text size={16} color={Colors.FONT_SECOND}>{props.desc}</Text>
    </Flex>
  );
};

export default FormHeader;
