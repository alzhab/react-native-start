import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {styles} from './styles';
import {NoticeMessageProps} from './interfaces';
import {scaleSize} from '@styles/mixins';
import {Animated} from 'react-native';
import {Colors, ThemeContext} from '@styles/base';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Index = (props: NoticeMessageProps): ReactElement => {
	const anim = useRef(new Animated.Value(props.show ? 1 : 0)).current;
	const {colors} = useContext(ThemeContext);
 
	const toggleAnim = () => {
		Animated.spring(anim, {
			toValue: props.show ? 1 : 0,
			useNativeDriver: true,
			bounciness: 10
		}).start();
	};
 
	useEffect(() => {
		toggleAnim();
	}, [props.show]);
 
	const translateY = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [scaleSize(50), 0]
	});
 
	const style = {
		opacity: anim,
		transform: [
			{translateY}
		],
		backgroundColor: colors[props.type]
	};
 
	return (
		<Flex animated styles={[
			styles.container,
			style
		]} ai={AI.center} jc={JC.center}>
			<Text color={Colors.MAIN_BG}>{props.text}</Text>
		</Flex>
	);
};

export default Index;
