import {StyleSheet} from 'react-native';
import {boxShadow, scaleSize} from '@styles/mixins';
import {ColorsIN, TextSize} from '@styles/base';

export const getStyles = (colors: ColorsIN) => StyleSheet.create({
	inputItem: {
		...boxShadow(),
		backgroundColor: colors.SECOND_BG,
		paddingHorizontal: scaleSize(15),
		paddingVertical: scaleSize(10),
		borderRadius: 15,
		marginBottom: scaleSize(20),
		position: 'relative',
	},
	input: {
	  width: '100%',
		fontSize: TextSize.large,
		alignItems: 'center',
		justifyContent: 'center',
		color: colors.FONT
	},
	textArea: {
	  borderWidth: 0.5,
		borderColor: colors.FONT_SECOND,
		borderRadius: scaleSize(5),
		padding: scaleSize(8),
		minHeight: scaleSize(100),
		paddingVertical: 5
	},
	inputError: {
	  borderBottomColor: colors.ERROR,
		color: colors.ERROR
	},
	error: {
	  position: 'absolute',
	}
});

