import React from 'react';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {COLORS} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {Flex} from '../../atoms';
import {Button} from '../../molecules';
import {Body, Image} from './components';
import {StyleSheet} from 'react-native';
import {Props} from './interfaces';

const CategoryCard = (props: Props) => {
  return (
    <Button click={() => {}} empty type={ButtonTypes.EMPTY}
      styles={{
        width: props.width || '100%',
      }}
    >
      <Flex dir={props.row ? DIR.row : DIR.column}
            full
            ai={props.row ? AI.center : AI.flexStart}
            styles={[
              styles.card,
              {
                paddingTop: scaleSize(props.row ? 15 : 25),
                borderWidth: props.row ? 0 : 1,
                backgroundColor: '#FEF1E4'
              }]}>
        <Image row={props.row} src={props.data.image}/>
        
        <Body row={props.row} data={{title: props.data.title}}/>
      </Flex>
    </Button>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    borderColor: COLORS.BORDER,
    paddingBottom: scaleSize(15)
  }
});

export default CategoryCard;
