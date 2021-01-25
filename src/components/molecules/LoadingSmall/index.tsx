import React from 'react';
import AnimateItTiming from '../../atoms/AnimateItTiming';
import {Text} from '../../atoms';

const LoadingSmall = (props: { show: boolean }) => {
  return (
    <AnimateItTiming
      show={props.show}
      remove
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
      toConfig={{useNativeDriver: false}}
      fromConfig={{useNativeDriver: false}}
      interpolations={[{
        dir: 'both',
        outputRange: [0, 1],
        name: 'opacity'
      }, {
        dir: 'both',
        outputRange: [100, 0],
        name: 'translateY'
      }]}>
      <Text>Loading</Text>
    </AnimateItTiming>
  );
};

export default LoadingSmall;
