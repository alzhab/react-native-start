import React, {memo} from 'react';

import {FlatList} from 'react-native';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import Flex from '../Flex';
import {scaleSize} from '@styles/mixins';
import {Props} from './interfaces';

const Scroll = (props: Props) => {
  const scrollProps = {
    keyExtractor: (_: any, index: number) => index.toString(),
    contentContainerStyle: {paddingHorizontal: props.container ? CONTAINER_HOR_PADDING : 0},
    style: {width: '100%', marginBottom: scaleSize(props.bottom || 0)},
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    data: props.data,
    renderItem: props.item
  };
  
  return props.horizontal ? (
    <FlatList
      horizontal
      ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(15)}}/>}
      {...scrollProps}
    />
  ) : <FlatList
    {...scrollProps}
  />;
};

export default memo(Scroll, (prev, next) => {
  return (JSON.stringify(prev.data) === JSON.stringify(next.data));
});
