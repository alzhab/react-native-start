import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Profile = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Profile</Text>
    </Flex>
  );
};

export default Profile;
