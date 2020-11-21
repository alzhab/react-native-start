import {StyleProp} from 'react-native';
import {Colors, ColorsIN, TextFamily, TextSize} from '@styles/base';
import {TextAlign} from '@types';

export interface TextProps {
  children: any,
  styles?: StyleProp<any>,
  size?: TextSize,
  family?: TextFamily,
  color?: Colors,
  animated?: boolean,
  numberOfLines?: number,
  textAlign?: TextAlign,
  full?: boolean
}
