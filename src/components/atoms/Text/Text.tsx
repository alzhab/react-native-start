import React, {ReactElement, useContext} from 'react';
import {Animated, Text} from 'react-native';
import {TextProps} from './interfaces';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {scaleFont} from '@styles/mixins';
import {TextAlign} from '@types';

const MyText = (props: TextProps): ReactElement => {
	const fontSizeName = props.size || TextSize.medium;
	const fontSize = scaleFont(fontSizeName);
	const fontFamily = props.family || TextFamily.REGULAR;
	const Container = props.animated ? Animated.Text : Text;
	const {colors} = useContext(ThemeContext);
	
	const styles = {
	  width: props.full ? '100%' : null,
		color: props.color ? colors[props.color] : colors.FONT,
		textAlign: props.textAlign || TextAlign.left,
		fontSize,
		fontFamily
	};
 
	return (
		<Container allowFontScaling={false}
			style={[props.styles, styles]}
			numberOfLines={props.numberOfLines ? props.numberOfLines : 0}>
			{props.children}
		</Container>
	);
};

export default MyText;
