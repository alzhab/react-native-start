import React, {memo} from 'react';
import {
  AnimateItTiming,
  Button,
  CategoryCard,
  Flex,
  Loading,
  NotFound,
  ProductCard,
  Scroll,
  Section,
  Text
} from '@components';
import {Colors} from '@styles/base';
import {AI, ButtonTypes, JC, TextAlign} from '@types';


const Categories = (props: {loading: boolean, products: any[], categories: any[]}) => {
  const rightButton = (
    <Button
      empty
      color={Colors.PRIMARY}
      click={() => {
      }}
      title={'See all'}
      type={ButtonTypes.EMPTY}/>
  );
  
  return (
      <Section
        headerContainer
        title={'Categories'}
        right={rightButton}
      >
        <Loading show={props.loading}/>
  
        <NotFound show={!props.loading && !props.products.length} />
        
        <Scroll
          bottom={20}
          container
          horizontal
          data={props.categories}
          item={({item}) => {
            return (
              <AnimateItTiming
                interpolations={[{
                  name: 'opacity',
                  outputRange: [0, 1],
                  dir: 'to'
                }, {
                  name: 'translateX',
                  outputRange: [300, 0],
                  dir: 'to'
                }]}>
                <CategoryCard row width={250} data={item}/>
              </AnimateItTiming>
            )
          }}
        />
    
        <Scroll
          container
          horizontal
          data={props.products}
          item={({item}) => {
            return (
              <AnimateItTiming
                interpolations={[{
                  name: 'opacity',
                  outputRange: [0, 1],
                  dir: 'to'
                }, {
                  name: 'translateX',
                  outputRange: [300, 0],
                  dir: 'to'
                }]}>
                <ProductCard width={180} data={item}/>
              </AnimateItTiming>
            )
          }}
        />
      </Section>
  );
};

export default Categories
