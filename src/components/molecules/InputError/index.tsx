import React, {ReactElement, useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {styles} from './styles';
import {InputErrorProps} from './interfaces';
import {Colors, TextSize} from '@styles/base';
import {Text} from '@components';

const InputError = (props: InputErrorProps): ReactElement => {
	const errOpacity = useRef(new Animated.Value(0)).current;
	const error = props.error;
 
	const toggleError = () => {
		const err = props.error || '';
		Animated.timing(errOpacity, {
			toValue: err.length ? 1 : 0,
			useNativeDriver: true,
			easing: Easing.linear,
			duration: 300
		}).start();
	};
 
	useEffect(() => {
		toggleError();
	}, [props.error]);
 
	const translateY = errOpacity.interpolate({
		inputRange: [0, 1],
		outputRange: [-10, 0]
	});
 
	return (
		<Text
			animated
			color={Colors.ERROR}
			size={TextSize.medium}
			styles={[
				styles.error,
				{
					transform: [{translateY}],
					opacity: errOpacity,
					bottom: -scaleSize(20)
				}
			]}>
			{error}
		</Text>
	);
};

export default InputError;
