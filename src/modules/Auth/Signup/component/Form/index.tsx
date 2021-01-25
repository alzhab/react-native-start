import React from 'react';
import {Button, Input} from '@components';
import {Controller, useForm} from 'react-hook-form';
import {errMess, validators} from '@utils';
import {scaleSize} from '@styles/mixins';
import {Props} from './interfaces';

const Form = (props: Props) => {
  const { control, handleSubmit, errors } = useForm();
  
  return (
    <>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            placeholder='Username'
            value={value}
            error={errors.username ? errors.username.message : ''}
            onChange={value => onChange(value)} />
        )}
        name="username"
        rules={{ required: errMess.required }}
        defaultValue=""
      />
  
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            placeholder='Email'
            keyboardType={'email-address'}
            value={value}
            error={errors.email ? errors.email.message : ''}
            onChange={value => onChange(value)} />
        )}
        name="email"
        rules={{ required: errMess.required, pattern: validators.emailPattern }}
        defaultValue=""
      />
  
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            secureTextEntry
            placeholder='Password'
            value={value}
            error={errors.password ? errors.password.message : ''}
            onChange={value => onChange(value)} />
        )}
        name="password"
        rules={{ required: errMess.required }}
        defaultValue=""
      />
  
      <Button styles={{marginTop: scaleSize(30)}} click={handleSubmit(props.submit)} full title={'Sign Up'} />
    </>
  );
};

export default Form;
