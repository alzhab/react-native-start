import {ColorsIN} from '@styles/base';
import {StyleProp, StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
  return StyleSheet.create({
    tabs: {
      position: 'relative',
      paddingBottom: scaleSize(20),
      borderBottomColor: colors.FONT_SECOND,
      borderBottomWidth: 0.5,
      marginBottom: scaleSize(20)
    },
    indicator: {
      position: 'absolute',
      bottom: 0,
      height: 3,
      width: scaleSize(50),
      left: 0,
      backgroundColor: colors.PRIMARY
    }
  });
};
