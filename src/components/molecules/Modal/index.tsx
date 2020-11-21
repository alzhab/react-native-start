import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {getStyles} from './styles';
import {ModalProps} from './interfaces';
import {Animated, Easing, TouchableOpacity} from 'react-native';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import {ThemeContext} from '@styles/base';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Index = (props: ModalProps): ReactElement | null => {
	const anim = useRef(new Animated.Value(props.show ? 1 : 0)).current;
	const {colors} = useContext(ThemeContext);
	const styles = getStyles(colors);
 
	const toggleAnim = () => {
		Animated.timing(anim, {
			toValue: props.show ? 1 : 0,
			useNativeDriver: true,
			duration: 300,
			easing: Easing.linear
		}).start();
	};
 
	const scale = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const opacity = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const animStyle = {
		opacity,
		zIndex: props.show ? 90 : -100
	};
 
	useEffect(() => {
		toggleAnim();
	}, [props.show]);
 
	return props.show ? (
		<>
			<Flex
				animated
				ai={AI.center}
				jc={JC.center}
				styles={[styles.container, {paddingHorizontal: props.full ? 0 : CONTAINER_HOR_PADDING}, animStyle]}
			>
				<Flex styles={[styles.modalBack]}/>
    
				<Flex full animated styles={[styles.modal, (props.empty ? null : styles.modalNotEmpty), {transform: [{scale}]}]}
					ai={AI.center} jc={JC.center}>
					{props.show && props.children}
				</Flex>
    
				<TouchableOpacity style={styles.closeButton} onPress={() => props.closeModal()}>
					<Text>Close</Text>
				</TouchableOpacity>
			</Flex>
		</>
	) : null;
};

export default Index;
