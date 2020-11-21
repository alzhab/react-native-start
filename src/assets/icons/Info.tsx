import React, {ReactElement, useContext} from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Info = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={14 * scale} height={14 * scale} viewBox='0 0 14 14'>
			<G transform="translate(1 1)">
				<Circle cx="6" cy="6" r="6" fill="none" stroke={color} stroke-width="2"/>
				<Path
					d="M16.944,15.57l-.129.357q-.579.155-.923.236a3.514,3.514,0,0,1-.8.081A2.136,2.136,0,0,1,14,16.012a.679.679,0,0,1-.389-.589,1.43,1.43,0,0,1,.029-.283,2.468,2.468,0,0,1,.093-.327l.479-1.158q.064-.167.108-.315a.968.968,0,0,0,.044-.272.34.34,0,0,0-.134-.309,1.037,1.037,0,0,0-.514-.087,1.926,1.926,0,0,0-.383.04q-.2.04-.336.075l.129-.357q.473-.131.906-.224a3.89,3.89,0,0,1,.818-.093,2.085,2.085,0,0,1,1.072.228.677.677,0,0,1,.377.593,2.287,2.287,0,0,1-.026.266,1.3,1.3,0,0,1-.1.349L15.7,14.7a2.365,2.365,0,0,0-.105.317,1.17,1.17,0,0,0-.047.27.325.325,0,0,0,.152.313,1.182,1.182,0,0,0,.526.083,2.181,2.181,0,0,0,.4-.042A2.978,2.978,0,0,0,16.944,15.57Zm.123-4.841a.608.608,0,0,1-.336.513,1.656,1.656,0,0,1-1.622,0,.56.56,0,0,1,0-1.029,1.642,1.642,0,0,1,1.622,0A.612.612,0,0,1,17.067,10.729Z"
					transform="translate(-9.187 -7.008)" fill={color} fill-rule="evenodd"/>
			</G>
		</Svg>
	);
};

export default Info;

