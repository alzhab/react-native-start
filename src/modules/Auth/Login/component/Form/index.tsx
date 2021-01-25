import React, {useState} from 'react';
import {Button, Flex, Input} from '@components';
import {AI, ButtonTypes} from '@types';
import {scaleSize} from '@styles/mixins';
import {Props} from './interfaces';
import {Controller, useForm} from 'react-hook-form';
import {errMess} from '@utils';

const Form = (props: Props) => {
  const { control, handleSubmit, errors } = useForm();
  
  return (
    <>
      
      <Controller
        name="email"
        control={control}
        rules={{ required: errMess.required }}
        defaultValue=""
        render={({ onChange, value }) => (
          <Input
          placeholder='Email'
          keyboardType={'email-address'}
          value={value}
          error={errors.email ? errors.email.message : ''}
          onChange={value => onChange(value)} />
        )}
      />
  
      <Controller
        name="password"
        rules={{ required: errMess.required }}
        defaultValue=""
        control={control}
        render={({ onChange, value }) => (
          <Input
          secureTextEntry
          placeholder='Password'
          value={value}
          error={errors.password ? errors.password.message : ''}
          onChange={value => onChange(value)} />
        )}
      />
  
      <Flex full ai={AI.flexEnd} styles={{marginTop: scaleSize(20)}}>
        <Button click={() => {}} empty type={ButtonTypes.EMPTY} title={'Forgot Password?'} />
      </Flex>
  
      <Button styles={{marginTop: scaleSize(30)}} click={handleSubmit(props.submit)} full title={'Log in'} />
    </>
  );
};

export default Form;
