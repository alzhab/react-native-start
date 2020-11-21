import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Check = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={10 * scale} viewBox="0 0 12 10">
			<Path d="M46.387,150.669l6.834-6.959a.737.737,0,1,1,1.039,1.045l-7.338,7.505a.75.75,0,0,1-1.055,0l-3.15-3.214a.742.742,0,1,1,1.039-1.061Z" transform="translate(-42.49 -143.477)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Check;
