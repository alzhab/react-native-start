import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Logout = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={10 * scale} viewBox="0 0 12 10">
			<Path d="M20.5,22.551a.388.388,0,0,0-.4.371v2.3a.389.389,0,0,1-.4.371h-5.65a.389.389,0,0,1-.4-.371V17.448a.389.389,0,0,1,.4-.371H19.7a.389.389,0,0,1,.4.371v2.3a.4.4,0,0,0,.807,0v-2.3A1.167,1.167,0,0,0,19.7,16.334h-5.65a1.167,1.167,0,0,0-1.211,1.114V25.22a1.167,1.167,0,0,0,1.211,1.114H19.7a1.167,1.167,0,0,0,1.211-1.114v-2.3A.388.388,0,0,0,20.5,22.551Zm4.331-1.22a.352.352,0,0,0-.008-.07c0-.012-.008-.024-.012-.036s-.006-.022-.011-.033a.363.363,0,0,0-.024-.042c0-.007-.008-.015-.013-.021a.382.382,0,0,0-.052-.058l-2.32-2.134a.428.428,0,0,0-.571,0,.35.35,0,0,0,0,.525l1.632,1.5H16.2a.373.373,0,1,0,0,.743h7.259l-1.632,1.5a.35.35,0,0,0,0,.525.429.429,0,0,0,.571,0L24.716,21.6l.006-.007a.369.369,0,0,0,.044-.05c.007-.01.012-.021.019-.032a.2.2,0,0,0,.032-.072.3.3,0,0,0,.01-.03.345.345,0,0,0,.008-.073A.015.015,0,0,1,24.834,21.331Z" transform="translate(-12.834 -16.334)" fill={color}/>
		</Svg>
	);
};

export default Logout;
