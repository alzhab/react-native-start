import React, {memo, ReactElement, useEffect, useMemo, useState} from 'react';
import {Animated, StyleProp} from 'react-native';

// TODO AnimateItTiming Проблема быстрой смены анимации
/* TODO FormGenerator Component */


interface Interpolation {
  name: string;
  inputRange?: number[];
  outputRange: number[] | string[];
  dir: 'to' | 'from' | 'both'
}

interface TimingInterface {
  useNativeDriver?: boolean,
  duration?: number,
  delay?: number
}

interface Props {
  children: any,
  interpolations: Interpolation[],
  show?: boolean,
  remove?: boolean,
  style?: StyleProp<any>
  toConfig?: TimingInterface,
  fromConfig?: TimingInterface,
}


const AnimateItTiming = (props: Props): ReactElement => {
  const {
    show = true,
    children,
    interpolations,
    style = {},
    remove = false,
    toConfig,
    fromConfig,
  } = props;
  
  const toAnimate = new Animated.Value(0);
  const fromAnimate = new Animated.Value(1);
  const defaultConfig = {
    useNativeDriver: true,
    duration: 300,
    delay: 0
  };

  useEffect(() => {
    const toAnimValue = +JSON.stringify(toAnimate);
    const fromAnimValue = +JSON.stringify(fromAnimate);
  
    if (show && toAnimValue === 0) {
      if (remove) {
        setHide(false)
      } else {
        toAnim()
      }
    }
    
    if (!show && fromAnimValue === 1) {
      fromAnim()
    }
  }, [show]);
  
  const [hide, setHide] = useState(remove ? !show : false);
  
  useEffect(() => {
    if (!hide && hide !== show) {
      toAnim()
    }
  }, [hide]);
  
  const toAnim = () => {
    const {
      useNativeDriver = true,
      duration = 300,
      delay = 0
    } = toConfig || defaultConfig;
    
    Animated.timing(toAnimate, {
      toValue: 1,
      useNativeDriver,
      duration,
      delay
    }).start();
  };
  
  const fromAnim = () => {
    const {
      useNativeDriver = true,
      duration = 300,
      delay = 0
    } = fromConfig || defaultConfig;
    
    Animated.timing(fromAnimate, {
      toValue: 0,
      useNativeDriver,
      duration,
      delay
    }).start(() => {
      if (remove) {
        setHide(true);
      }
    });
  };
  
  let toAnimStyle: StyleProp<any> = {};
  
  let fromAnimStyle: StyleProp<any> = {};
  
  interpolations.forEach(inter => {
    const transformStyles = ['decomposedMatrix', 'rotation', 'scaleX', 'scaleY', 'scale', 'transformMatrix', 'translateX', 'translateY'];
    
    const toInterpolation = toAnimate.interpolate({
      inputRange: inter.inputRange ? inter.inputRange : [0, 1],
      outputRange: inter.outputRange
    });
  
    const fromInterpolation = fromAnimate.interpolate({
      inputRange:  inter.inputRange ? inter.inputRange : [0, 1],
      outputRange: inter.outputRange
    });
    
    if (transformStyles.includes(inter.name)) {
      if (inter.dir === 'to' || inter.dir === 'both') {
        if (!toAnimStyle.transform) {
          toAnimStyle.transform = []
        }
        
        toAnimStyle.transform.push({[inter.name]: toInterpolation});
      }
  
      if (inter.dir === 'from' || inter.dir === 'both') {
        if (!fromAnimStyle.transform) {
          fromAnimStyle.transform = []
        }
  
        fromAnimStyle.transform.push({[inter.name]: fromInterpolation});
      }
    } else {
      if (inter.dir === 'to' || inter.dir === 'both') {
        toAnimStyle[inter.name] = toInterpolation;
      }
  
      if (inter.dir === 'from' || inter.dir === 'both') {
        fromAnimStyle[inter.name] = fromInterpolation;
      }
    }
  });
  
  const styles = useMemo(() => {
    return [
      style,
      show ? toAnimStyle : fromAnimStyle,
    ];
  }, [show]);
  
  
  return hide ? <></> : (
    <Animated.View
      style={styles}>
      {children}
    </Animated.View>
  )
};

// Memo что бы компонент не обновлялся при обновлений show
export default AnimateItTiming
