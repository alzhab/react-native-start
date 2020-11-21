import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Location = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={15 * scale} viewBox="0 0 12 15">
			<G transform="translate(-5.249 -0.527)">
				<G transform="translate(5.249 0.527)">
					<Path
						d="M85.9,46.063h0a.342.342,0,0,1-.289-.157,29.789,29.789,0,0,0-2.279-2.949c-.543-.646-1.1-1.315-1.6-1.971a7.382,7.382,0,0,1-1.81-4.053,6,6,0,0,1,12,0c0,1.569-1.027,3.132-2.57,4.995-.271.327-.554.66-.827.981a28.929,28.929,0,0,0-2.337,3A.343.343,0,0,1,85.9,46.063Zm.022-14.333a5.267,5.267,0,0,0-5.317,5.2c0,.991.517,2.119,1.677,3.657.484.642,1.039,1.3,1.576,1.944.713.849,1.447,1.723,2.042,2.585.614-.887,1.369-1.774,2.1-2.636.272-.32.554-.651.821-.975,1.451-1.753,2.418-3.2,2.418-4.575A5.268,5.268,0,0,0,85.922,31.73Z"
						transform="translate(-79.923 -31.063)" fill={color}/>
					<G transform="translate(2.357 2.355)">
						<Path
							d="M166.7,119.619a3.737,3.737,0,1,1,3.642-3.737A3.7,3.7,0,0,1,166.7,119.619Zm0-6.687a2.953,2.953,0,1,0,2.858,2.951A2.91,2.91,0,0,0,166.7,112.932Z"
							transform="translate(-163.052 -112.148)" fill={color}/>
					</G>
				</G>
			</G>
		</Svg>
	);
};


export default Location;

