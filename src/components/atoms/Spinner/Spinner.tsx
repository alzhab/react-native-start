import Svg, {Circle, G} from 'react-native-svg';
import React, {ReactElement, useRef, useEffect, useContext} from 'react';
import {Animated, Easing} from 'react-native';
import {ThemeContext} from '@styles/base';
import {SpinnerProps} from './interfaces';

const Spinner = (props: SpinnerProps): ReactElement | null => {
	const width = props.width || 60;
	const anim = useRef(new Animated.Value(0)).current;
	const {colors} = useContext(ThemeContext);
 
	useEffect(() => {
		if(!props.hide){
			Animated.loop(rotate(), {
				iterations: -1,
				resetBeforeIteration: true,
			}).start()
		}
	}, []);
 
	const rotate = () => {
		return Animated.timing(anim, {
			toValue: 1,
			duration: 600,
			useNativeDriver: true,
			easing: Easing.linear,
		});
	};
 
	const rotateZ = anim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg']
	});
 
	const rotateZAnim = {transform: [{rotateZ}]};
 
	return !props.hide ? (
		<Animated.View style={rotateZAnim}>
			<Svg width={width} height={width}
				viewBox={`0 0 ${width} ${width}`}>
				<G
					stroke={colors.PRIMARY}
					strokeLinecap="round"
					strokeWidth="5"
					strokeDasharray={`${width} ${width}`}>
					<Circle cx={width / 2} cy={width / 2} r={width / 2 - 5} fill="none"/>
				</G>
			</Svg>
		</Animated.View>
	) : null
};

export default Spinner
