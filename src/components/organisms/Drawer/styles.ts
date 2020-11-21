import {ColorsIN} from '@styles/base';
import {StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {CONTAINER_VER_PADDING} from '@styles/spacing';

export const getStyles = (colors: ColorsIN) => {
	return StyleSheet.create({
		header: {
			backgroundColor: colors.MAIN_BG,
			paddingTop: CONTAINER_VER_PADDING,
			paddingBottom: scaleSize(40),
			paddingHorizontal: scaleSize(20)
		},
		headerImage: {
			width: scaleSize(60),
			height: scaleSize(60),
			borderColor: colors.SECOND_BG,
			borderWidth: 2,
			borderRadius: scaleSize(60),
			backgroundColor: colors.SECOND_BG,
			marginRight: scaleSize(10),
			overflow: 'hidden'
		},
	})
}
