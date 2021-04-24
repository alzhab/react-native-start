import {StyleProp} from 'react-native';
import {TextFamily} from '@styles/base';
import {ButtonTypes} from '@types';
import {ReactElement} from 'react';

export interface ButtonProps {
  title?: string,
  full?: boolean,
  size?: number,
  family?: TextFamily,
  type?: ButtonTypes,
  styles?: StyleProp<any>,
  click: () => void,
  children?: any,
  solid?: boolean,
  color?: string,
  empty?: boolean,
  icon?: ReactElement,
  activeOpacity?: number
}

export interface ButtonStylesInterface {
  width?: string,
  backgroundColor?: string,
  borderRadius: number,
  borderWidth?: number,
  borderColor?: string,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  alignItems?: 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
}
