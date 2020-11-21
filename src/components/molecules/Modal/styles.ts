import {StyleProp, StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {MODAL_HOR_PADDING} from '@styles/spacing';
import {ColorsIN} from '@styles/base';

export const getStyles = (colors: ColorsIN): StyleProp<any> => (
  StyleSheet.create({
    modalBack: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    modal: {
      position: 'relative',
      zIndex: 100,
      borderRadius: scaleSize(10)
    },
    modalNotEmpty: {
      backgroundColor: colors.MAIN_BG,
      paddingVertical: scaleSize(20),
      paddingHorizontal: MODAL_HOR_PADDING
    },
    closeButton: {
      position: 'absolute',
      zIndex: 100,
      bottom: scaleSize(100),
      borderRadius: 50 / 2,
      height: 50,
      width: 50,
      backgroundColor: colors.MAIN_BG,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);
