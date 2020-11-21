import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Message = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={11 * scale} viewBox="0 0 12 11">
			<G transform="translate(8.338 7)">
				<Path d="M11.8,4.142h-.4V2.179A1.191,1.191,0,0,0,10.2,1h-8A1.191,1.191,0,0,0,1,2.179V8.753a.393.393,0,0,0,.241.36.406.406,0,0,0,.432-.073L3.158,7.678H4.2V9.25a1.191,1.191,0,0,0,1.2,1.179h5.434l1.483,1.456a.405.405,0,0,0,.436.085A.393.393,0,0,0,13,11.607V5.321A1.191,1.191,0,0,0,11.8,4.142ZM3,6.893A.4.4,0,0,0,2.727,7l-.927.85V2.179a.4.4,0,0,1,.4-.393h8a.4.4,0,0,1,.4.393V6.5a.4.4,0,0,1-.4.393Zm9.2,3.766-.917-.9A.4.4,0,0,0,11,9.643H5.4A.4.4,0,0,1,5,9.25V7.678h5.2A1.191,1.191,0,0,0,11.4,6.5V4.928h.4a.4.4,0,0,1,.4.393Z" transform="translate(-9.338 -8)" fill={color}/>
			</G>
		</Svg>
	);
};

export default Message;
