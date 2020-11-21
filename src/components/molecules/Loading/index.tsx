import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {Props} from './interfaces';
import {styles} from './styles';
import {Animated, Easing} from 'react-native';
import {ThemeContext} from '@styles/base';
import {Flex, Spinner} from '@components';
import {AI, JC} from '@types';

const Index = (props: Props): ReactElement | null => {
	const anim = useRef(new Animated.Value(props.loading ? 1 : 0)).current;
 
	const changeActive = () => {
		Animated.timing(anim, {
			toValue: props.loading ? 1 : 0,
			easing: Easing.linear,
			useNativeDriver: true,
			duration: 300
		}).start();
	};
 
	useEffect(() => {
		changeActive();
	}, [props.loading]);
 
	const scale = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const opacity = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const borderRadius = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [50, 0]
	});
 
	const animStyle = {
		transform: [{scale}],
		opacity,
		borderRadius
	};
 
	const {colors} = useContext(ThemeContext);
 
	return (
		<Flex
			animated
			full
			ai={AI.center}
			jc={JC.center}
			styles={[styles.container, animStyle, {backgroundColor: colors.MAIN_BG}]}>
			<Spinner/>
		</Flex>
	);
};

export default Index;
