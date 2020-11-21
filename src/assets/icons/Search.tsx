import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Search = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox='0 0 12 12'>
			<G transform="translate(280.273 -1.172)">
				<G transform="translate(-280.273 1.172)">
					<G transform="translate(0)">
						<Path d="M9.935,9.07l3.058,3.058a.612.612,0,0,1-.865.865L9.07,9.935a4.9,4.9,0,1,1,.865-.865ZM8.664,8.664a3.672,3.672,0,1,0-5.193,0A3.672,3.672,0,0,0,8.664,8.664Z" transform="translate(-1.172 -1.172)" fill="#2a2ac0" fill-rule="evenodd"/>
					</G>
				</G>
			</G>
		</Svg>
	);
};

export default Search;
