import React from 'react';
import {scaleSize} from '@styles/mixins';
import {Flex, Image} from '../../../../atoms';

const ProductImage = (props: {src?: string, row?: boolean}) => {
  const source = props.src ? {uri: props.src} : require('@assets/images/banana.png');
  
  return (
    <Flex
      styles={{
        width: props.row ? scaleSize(80) : '100%',
        height: scaleSize(80),
        paddingHorizontal: scaleSize(props.row ? 15 : 30),
        marginBottom: scaleSize(props.row ? 0 : 25),
      }}>
      <Image
        resizeMode={'contain'}
        source={source}/>
    </Flex>
  );
};

export default ProductImage;
