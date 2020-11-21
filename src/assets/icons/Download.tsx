import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Download = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<G transform="translate(245 -137.652)">
				<G transform="translate(-245 137.652)">
					<Path d="M36.181,987.528a.634.634,0,0,1-.375-.154l-4.636-4.365a.547.547,0,0,1-.021-.772.562.562,0,0,1,.771-.021l3.716,3.5v-7.812a.545.545,0,1,1,1.091,0v7.812l3.716-3.5a.571.571,0,0,1,.771.021.547.547,0,0,1-.021.772l-4.636,4.365a.485.485,0,0,1-.375.154Z" transform="translate(-30.181 -977.362)" fill={color}/>
					<Path d="M28.545,1028.362a.546.546,0,0,0,0,1.091H39.455a.546.546,0,0,0,0-1.091Z" transform="translate(-28 -1017.454)" fill={color}/>
				</G>
			</G>
		</Svg>
	);
};

export default Download;
