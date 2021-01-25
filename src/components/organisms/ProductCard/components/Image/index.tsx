import React from 'react';
import {scaleSize} from '@styles/mixins';
import {Flex, Image} from '../../../../atoms';

const ProductImage = (props: {src?: string}) => {
  const source = props.src ? {uri: props.src} : require('@assets/images/banana.png');
  
  return (
    <Flex
      full
      styles={{
        height: scaleSize(80),
        paddingHorizontal: scaleSize(30),
        marginBottom: scaleSize(25)
      }}>
      <Image
        resizeMode={'contain'}
        source={source}/>
    </Flex>
  );
};

export default ProductImage;
