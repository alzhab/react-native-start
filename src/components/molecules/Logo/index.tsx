import React, {ReactElement, useContext} from 'react';
import {scaleSize} from '@styles/mixins';
import {Colors, TextFamily, TextSize, ThemeContext} from '@styles/base';
import {LogoProps} from './interfaces';
import {AI} from '@types';
import {Flex, Text} from '@components';
import {LogoIcon} from '@icons';

const Logo = (props: LogoProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
 
	return (
		<Flex ai={AI.center}>
			<LogoIcon scale={7} color={colors.SECOND_BG} />
   
			<Text styles={{marginTop: scaleSize(20)}} color={props.light ? Colors.SECOND_BG : Colors.PRIMARY}
				family={TextFamily.BLACK} size={TextSize.xlarge}>
        Base <Text color={props.light ? Colors.SECOND_BG : Colors.PRIMARY} family={TextFamily.LIGHT}
					size={TextSize.xlarge}>App</Text>
			</Text>
		</Flex>
	);
};

export default Logo;
