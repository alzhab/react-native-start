import {StyleProp, StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {ColorsIN, TextFamily, TextSize} from '@styles/base';

export const getStyles = (colors: ColorsIN): StyleProp<any> => StyleSheet.create({
	inputItem: {
		position: 'relative',
		width: '20%'
	},
	input: {
		width: '100%',
		textAlign: 'center',
		fontSize: TextSize.extraLarge,
		paddingBottom: scaleSize(25),
		color: colors.PRIMARY,
		borderBottomWidth: 1,
		fontFamily: TextFamily.BOLD,
		borderBottomColor: colors.BORDER_COLOR
	}
});

