import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Page = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={13 * scale} viewBox="0 0 12 13">
			<G transform="translate(-6 -2)">
				<Path d="M16.615,2H10.154a.489.489,0,0,0-.086.008h-.005a.48.48,0,0,0-.11.037l-.027.014a.458.458,0,0,0-.1.068L6.135,5.594a.433.433,0,0,0-.072.092l-.014.025a.414.414,0,0,0-.04.1h0A.407.407,0,0,0,6,5.9v7.8A1.346,1.346,0,0,0,7.385,15h9.231A1.346,1.346,0,0,0,18,13.7V3.3A1.346,1.346,0,0,0,16.615,2ZM9.692,3.48V5.033a.449.449,0,0,1-.462.433H7.576ZM17.077,13.7a.449.449,0,0,1-.462.433H7.385a.449.449,0,0,1-.462-.433V6.333H9.231a1.346,1.346,0,0,0,1.385-1.3V2.867h6a.449.449,0,0,1,.462.433Z" transform="translate(0)" fill={color}/>
				<Path d="M28.874,32H25.43a.43.43,0,1,0,0,.861h3.444a.43.43,0,0,0,0-.861Z" transform="translate(-14.431 -23.497)" fill={color}/>
				<Path d="M24.166,44H19.43a.43.43,0,1,0,0,.861h4.735a.43.43,0,1,0,0-.861Z" transform="translate(-9.798 -32.896)" fill={color}/>
			</G>
		</Svg>
	);
};

export default Page;
