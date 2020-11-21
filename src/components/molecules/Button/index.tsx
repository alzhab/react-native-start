import React, {ReactElement, useContext} from 'react';
import {ButtonProps, ButtonStylesInterface} from './interfaces';
import {TouchableOpacity} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {Colors, ThemeContext} from '@styles/base';
import {Flex, Text} from '@components';
import {AI, ButtonTypes, JC, TextAlign} from '@types';

const Index = (props: ButtonProps): ReactElement => {
	const type = props.type || 'PRIMARY';
	const shadow = {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9
	};
	const isUnpressed = props.type === 'UNPRESSED';
 
	const styles: ButtonStylesInterface = {
		borderRadius: props.solid ? 0 : scaleSize(10),
		alignItems: 'center',
		justifyContent: 'center'
	};
	const {colors} = useContext(ThemeContext);
 
	let color = Colors.FONT;
	switch (type) {
	case ButtonTypes.PRIMARY:
		color = Colors.MAIN_BG;
		styles.backgroundColor = colors.PRIMARY;
		break;
	case ButtonTypes.BORDERED:
		styles.backgroundColor = 'transparent';
		styles.borderColor = colors.BORDER_SECOND;
		styles.borderWidth = 2;
		color = Colors.FONT;
		break;
	case ButtonTypes.UNPRESSED:
		styles.backgroundColor = colors.MAIN_BG;
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT_SECOND;
		break;
	case ButtonTypes.EMPTY:
		styles.backgroundColor = 'transparent';
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT;
		break;
	case ButtonTypes.DISABLED:
		styles.backgroundColor = colors.FONT_SECOND;
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT;
		break;
	}
 
	if (props.full) {
		styles.width = '100%';
	}
 
	return (
		<TouchableOpacity
			activeOpacity={type === ButtonTypes.DISABLED ? 1 : 0.7}
			onPress={() => props.click()}
			style={[{
				paddingVertical: props.empty ? 0 : 13,
				paddingHorizontal: props.empty ? 0 : scaleSize(15)
			}, props.styles, styles, isUnpressed && shadow]}>
			<Flex full ai={AI.center} jc={JC.center}>
				{props.title && <Text
					color={props.color || color}
					size={props.size}
					family={props.family}
					textAlign={TextAlign.center}
				>{props.title}</Text>}
    
				{props.children ? props.children : null}
			</Flex>
		</TouchableOpacity>
	);
};

export default Index;
