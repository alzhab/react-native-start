import React, {ReactElement, useContext, useEffect, useRef, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {Colors, TextFamily, TextSize, ThemeContext} from '@styles/base';
import {getStyles} from './styles';
import {Props} from './interfaces';
import {scaleSize} from '@styles/mixins';
import {JC, TextAlign} from '@types';
import {Flex, Text} from '@components';

const Tabs = (props: Props): ReactElement => {
	const [tabsWidth, setTabsWidth] = useState(0);
	const {colors} = useContext(ThemeContext);
	const styles = getStyles(colors);
	const anim = useRef(new Animated.Value(props.activeTab)).current;
	const indicatorWidth = scaleSize(50);
 
	const toggleAnim = () => {
		Animated.spring(anim, {
			toValue: props.activeTab,
			useNativeDriver: false,
			bounciness: 10
		}).start();
	};
 
	useEffect(() => {
		toggleAnim();
	}, [props.activeTab]);
 
	const left = anim.interpolate({
		inputRange: [0, 1, 2],
		outputRange: [0, props.tabs.length === 2 ? tabsWidth - indicatorWidth :  tabsWidth / 2 - (indicatorWidth / 2), tabsWidth - indicatorWidth]
	});
 
	return (
		<>
			<Flex onLayout={(event) => {
				const {width} = event.nativeEvent.layout;
				setTabsWidth(width);
			}}
			full dir={'row'} jc={JC.center} styles={styles.tabs}>
				{
					props.tabs.map((tab, index) => {
						const isActive = index === props.activeTab;
						let textAlign = TextAlign.center;
      
						if (index === 0) {
							textAlign = TextAlign.left;
						} else if (index === props.tabs.length - 1) {
							textAlign = TextAlign.right;
						}
      
						return (
							<TouchableOpacity
								style={{width: tabsWidth / props.tabs.length}}
								onPress={() => props.changeActiveTab(index)}
								key={tab.label}>
								<Text
									textAlign={textAlign}
									color={isActive ? Colors.PRIMARY : Colors.FONT}
									size={TextSize.large}
									family={TextFamily.BOLD}>{tab.label}</Text>
							</TouchableOpacity>
						);
					})
				}
				<Flex animated styles={[styles.indicator, {left}]}/>
			</Flex>
   
			{props.tabs[props.activeTab].content}
		</>
	);
};

export default Tabs;
