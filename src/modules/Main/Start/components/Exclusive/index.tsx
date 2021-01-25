import React, {memo} from 'react';
import {AnimateItTiming, Button, Flex, Loading, NotFound, ProductCard, Scroll, Section, Text} from '@components';
import {Colors} from '@styles/base';
import {AI, ButtonTypes, JC, TextAlign} from '@types';


const Exclusive = (props: { data: any[], loading: boolean }) => {
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
      title={'Exclusive Offer'}
      right={rightButton}
    >
      <Loading show={props.loading}/>
  
      <NotFound show={!props.loading && !props.data.length} />
      
      <Scroll
        loading={props.loading}
        container
        horizontal
        data={props.data}
        item={({item, index}) => {
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
          );
        }}
      />
    </Section>
  );
};

export default Exclusive
