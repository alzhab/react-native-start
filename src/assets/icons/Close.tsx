import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Close = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox='0 0 12 12'>
			<G id="noun_Cross_1776298" transform="translate(-47.958 -18.958)">
				<G transform="translate(0 -952.362)">
					<Path d="M32.646,973.623a1.032,1.032,0,0,0-1.46,0l-4.233,4.233-4.233-4.233a1.032,1.032,0,1,0-1.46,1.46l4.233,4.233-4.233,4.233a1.032,1.032,0,1,0,1.46,1.46l4.233-4.233,4.233,4.233a1.032,1.032,0,0,0,1.46-1.46l-4.233-4.233,4.233-4.233A1.032,1.032,0,0,0,32.646,973.623Z" transform="translate(27 -2)" fill={color} />
				</G>
			</G>
		</Svg>
	);
};

export default Close;

