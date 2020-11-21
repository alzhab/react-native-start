import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, TextSize, ThemeContext} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '@components';
import {AI, JC, TextAlign} from '@types';

const Hello = (): ReactElement => {
	const {colors} = useContext(ThemeContext);
 
	return (
		<Flex full size={1} styles={{backgroundColor: colors.MAIN_BG}} jc={JC.center} ai={AI.center}>
			<Text color={Colors.FONT} styles={{marginBottom: scaleSize(15)}} textAlign={TextAlign.center} size={TextSize.xlarge}>Че смотришь ?</Text>
			<Text color={Colors.PRIMARY} textAlign={TextAlign.center} size={TextSize.extraLarge} family={TextFamily.BOLD}>Прогай!</Text>
		</Flex>
	);
};

export default Hello;
