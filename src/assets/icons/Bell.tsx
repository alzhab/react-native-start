import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Bell = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path d="M4.293,9.813A1.226,1.226,0,0,0,5.519,8.586H3.066A1.226,1.226,0,0,0,4.293,9.813ZM8.421,6.944A3.566,3.566,0,0,1,7.358,3.987,3.027,3.027,0,0,0,4.905,1.013v-.4a.613.613,0,1,0-1.226,0v.4A3.027,3.027,0,0,0,1.227,3.987,3.566,3.566,0,0,1,.164,6.944.6.6,0,0,0,0,7.36a.614.614,0,0,0,.615.613H7.97a.614.614,0,0,0,.615-.613A.6.6,0,0,0,8.421,6.944Z" transform="translate(0.001)" fill={color}/>
		</Svg>
	);
};

export default Bell;
