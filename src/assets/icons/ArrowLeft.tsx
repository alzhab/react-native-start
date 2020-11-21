import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const ArrowLeft = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={7 * scale} height={11 * scale} viewBox="0 0 7 11">
			<Path d="M30.562,16.132,26.633,12.4l3.929-3.732a.715.715,0,0,0,.226-.516A.747.747,0,0,0,30.05,7.4h-.012a.744.744,0,0,0-.524.211l-4.488,4.261a.742.742,0,0,0-.226.528.722.722,0,0,0,.226.528l4.5,4.261a.775.775,0,0,0,.524.211.763.763,0,0,0,.536-.223.73.73,0,0,0,.214-.528A.666.666,0,0,0,30.562,16.132Z" transform="translate(-24.8 -7.4)" fill={color}/>
		</Svg>
	);
};

export default ArrowLeft;
