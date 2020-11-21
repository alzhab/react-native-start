import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Account = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<G transform="translate(206.947 -167.053)">
				<G transform="translate(-206.947 167.053)">
					<Path d="M11.053,5.053a6,6,0,1,0,6,6A6.007,6.007,0,0,0,11.053,5.053Zm0,11.177a5.177,5.177,0,1,1,5.177-5.177A5.183,5.183,0,0,1,11.053,16.23Z" transform="translate(-5.053 -5.053)" fill={color}/>
					<Path d="M38.757,28.38A1.862,1.862,0,1,0,36.9,26.518,1.864,1.864,0,0,0,38.757,28.38Zm0-2.9a1.039,1.039,0,1,1-1.039,1.04A1.041,1.041,0,0,1,38.757,25.478Z" transform="translate(-32.644 -22.039)" fill={color}/>
					<Path d="M31.109,54.125a2.323,2.323,0,0,0-2.169-1.577.41.41,0,0,0-.272.08,1.842,1.842,0,0,1-2.228,0,.413.413,0,0,0-.271-.08A2.325,2.325,0,0,0,24,54.142a.411.411,0,1,0,.768.293,1.485,1.485,0,0,1,1.32-1.054,2.659,2.659,0,0,0,2.942,0,1.482,1.482,0,0,1,1.316,1.041.411.411,0,0,0,.767-.3Z" transform="translate(-21.444 -46.207)" fill={color}/>
				</G>
			</G>
		</Svg>
	);
};

export default Account;
