import React from 'react';
import {Button, Flex, Text} from '@components';
import {scaleSize} from '@styles/mixins';
import {Colors, COLORS} from '@styles/base';
import {AI, ButtonTypes, DIR} from '@types';
import SearchIcon from '@assets/icons/search.icon';

const Search = () => {
  return (
    <Flex container full>
      <Button
        full
        empty
        styles={{
          marginBottom: scaleSize(30),
          backgroundColor: COLORS.SECOND_BG,
          paddingVertical: scaleSize(15),
          paddingHorizontal: scaleSize(15),
        }}
        type={ButtonTypes.EMPTY}
        click={() => {
        }}>
        <Flex full dir={DIR.row} ai={AI.center}>
          <SearchIcon size={18} />
          <Text color={Colors.FONT_SECOND} styles={{marginLeft: scaleSize(17)}}>Search Store</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default Search;
