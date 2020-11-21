import React, {ReactElement, useContext} from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Plus = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={13 * scale} height={13 * scale} viewBox="0 0 13 13">
			<G transform="translate(-201.9 -160.44)">
				<G transform="translate(202.5 161.04)">
					<G transform="translate(0 0)">
						<Path d="M35.335,35.429H33.187a.187.187,0,0,0-.187.187v.934h0a.187.187,0,0,0,.187.187h2.148a.093.093,0,0,1,.093.093v2.148h0a.187.187,0,0,0,.187.187h.934a.187.187,0,0,0,.187-.187V36.83h0a.093.093,0,0,1,.093-.093h2.148a.187.187,0,0,0,.187-.187v-.934h0a.187.187,0,0,0-.187-.187H36.83a.093.093,0,0,1-.093-.093V33.187h0A.187.187,0,0,0,36.55,33h-.934a.187.187,0,0,0-.187.187v2.148h0A.093.093,0,0,1,35.335,35.429Z" transform="translate(-30.175 -30.242)" fill={color} fill-rule="evenodd"/>
						<Circle cx="6" cy="6" r="6" fill="none" stroke={color} stroke-width="1.2"/>
					</G>
				</G>
			</G>
		</Svg>
	);
};

export default Plus;
