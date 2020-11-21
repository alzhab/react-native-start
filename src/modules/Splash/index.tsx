import React, {ReactElement, useContext, useEffect, useRef, useState} from 'react';
import {ThemeContext} from '@styles/base';
import {Animated} from 'react-native';
import {WINDOW_WIDTH} from '@styles/mixins';
import {Flex, Logo} from '@components';
import {AI, JC} from '@types';

const Splash = (props: { show: boolean }): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const anim = useRef(new Animated.Value(props.show ? 1 : 0)).current;
	const [hide, setHide] = useState(false);
 
	const toggleAnim = () => {
		Animated.timing(anim, {
			toValue: props.show ? 1 : 0,
			useNativeDriver: true,
			duration: 300
		}).start(({finished}) => {
			if(finished && !props.show) {
			  setHide(true)
			}
		});
	};
 
	useEffect(() => {
	  if(props.show) {
			setHide(false)
		}
		toggleAnim();
	}, [props.show]);
 
	const scale = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const borderRadius = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [WINDOW_WIDTH / 2, 0]
	});
 
	const style = {
		opacity: anim,
		borderRadius,
		transform: [{scale}]
	};
 
	return hide ? <></> : (
		<Flex animated ai={AI.center} jc={JC.center} size={1}
			styles={[
				style,
				{
					backgroundColor: colors.PRIMARY,
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				}
			]}>
			<Flex
				ai={AI.center}
				jc={JC.flexStart}
			>
				<Logo light/>
			</Flex>
		</Flex>
	);
};

export default Splash;
