import React from 'react';
import {ButtonTypes, JC} from '@types';
import {COLORS} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {Flex} from '../../atoms';
import {Button} from '../../molecules';
import {Body, Footer, Image} from './components';
import {StyleSheet} from 'react-native';
import {Props} from './interfaces';

const ProductCard = (props: Props) => {
  return (
    <Button click={() => {}} empty type={ButtonTypes.EMPTY}
            styles={{
              width: props.width || '100%',
            }}
    >
      <Flex full jc={JC.center} styles={[styles.card]}>
        <Image src={props.data.image} />
      
        <Body data={{title: props.data.title, amount: props.data.amount}} />
      
        <Footer price={props.data.price} />
      </Flex>
    </Button>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
    paddingTop: scaleSize(25),
    paddingBottom: scaleSize(15)
  }
});

export default ProductCard;
