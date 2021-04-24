import React from 'react';
import {Button, Flex, HeaderScroll, Text} from '@components';
import {AI, JC} from '@types';
import {authStore} from '@stores';

const Home = () => {
  return (
    <HeaderScroll headerProps={{title: 'Home'}}>
      <Flex size={1} containerHor full ai={AI.center} jc={JC.center}>
        <Button title={'Logout'} click={() => authStore.logout()} />
      </Flex>
    </HeaderScroll>
  );
};

export default Home;
