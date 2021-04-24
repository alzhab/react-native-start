import React from 'react';
import {COLORS} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {InputContainerProps} from './interfaces';
import {styles} from './styles';

const InputContainer = (props: InputContainerProps) => {
  return (
    <Flex styles={[styles.inputBox]}>
      <Text
        styles={{marginBottom: 10}}
        size={16}
        color={
          props.valid
            ? COLORS.SUCCESS
            : props.error
            ? COLORS.ERROR
            : COLORS.NEUTRAL_GRAY_DARK
        }>
        {props.label}
      </Text>

      {props.children}

      {props.help && !props.error ? (
        <Text
          styles={{marginTop: 15}}
          size={12}
          color={COLORS.NEUTRAL_GRAY_DARK}>
          {props.help}
        </Text>
      ) : null}

      {props.error ? (
        <Text styles={{marginTop: 15}} size={12} color={COLORS.ERROR}>
          {props.error}
        </Text>
      ) : null}
    </Flex>
  );
};

export default InputContainer;
