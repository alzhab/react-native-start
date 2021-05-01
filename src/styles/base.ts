import {Platform, StatusBarProps} from 'react-native';

export const COLORS = {
  PRIMARY: '#8F5F43',
  MAIN_BG: '#FFFFFF',
  SUCCESS: '#3ebf35',
  ERROR: '#e20e00',

  NEUTRAL_DARK: '#272422',
  NEUTRAL_GRAY_DARK: '#9D9EA3',
  NEUTRAL_GRAY: '#C9C9C9',
  NEUTRAL_GRAY_LIGHT: '#F2F2F2',
  NEUTRAL_LIGHT: '#FFFFFF',

  SEMATIC_RED: '#DA2C2C',
  SEMATIC_BROWN: '#390B12',
  SEMATIC_YELLOW: '#FFC600',
};

export const NAVIGATION_COLORS = {
  primary: COLORS.PRIMARY,
  background: COLORS.MAIN_BG,
  card: COLORS.MAIN_BG,
  text: COLORS.NEUTRAL_DARK,
  border: COLORS.NEUTRAL_DARK,
  notification: COLORS.PRIMARY,
};

export const STATUSBAR_PROPS: StatusBarProps = {
  translucent: Platform.OS === 'android',
  backgroundColor: Platform.OS === 'ios' ? COLORS.PRIMARY : 'transparent',
  barStyle: 'dark-content',
};

