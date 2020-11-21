import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Burger = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={10 * scale} viewBox="0 0 12 10">
			<G transform="translate(-8 -22.473)">
				<G transform="translate(8 22.473)">
					<Path
						d="M8.857,968.362a.883.883,0,0,0,0,1.765H19.143a.883.883,0,0,0,0-1.765Zm0,4.118a.883.883,0,0,0,0,1.765h5.67a.883.883,0,0,0,0-1.765Zm0,4.118a.883.883,0,0,0,0,1.765H19.143a.883.883,0,0,0,0-1.765Z"
						transform="translate(-8 -968.362)" fill={color}/>
				</G>
			</G>
		</Svg>
	);
};

export default Burger;
