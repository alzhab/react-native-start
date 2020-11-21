import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Facebook = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={19 * scale} viewBox="0 0 12 19">
			<G id="iconfinder_social-facebook_216078" transform="translate(-1 61)">
				<Path id="Контур_411" data-name="Контур 411" d="M13,10h3v3H13v7H10V13H7V10h3V8.745a5.669,5.669,0,0,1,1.118-3.512A3.6,3.6,0,0,1,13.9,4H16V7H13.9a.9.9,0,0,0-.9.9Z" transform="translate(-6 -65)" fill={color}/>
			</G>
		</Svg>
	);
};

export default Facebook;

