import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const ArrowRight = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={7 * scale} height={11 * scale} viewBox="0 0 7 11">
			<Path id="Контур_414" data-name="Контур 414" d="M32.085,18.6l-4.967-4.787,4.967-4.787a.923.923,0,0,0,.286-.662.943.943,0,0,0-.271-.677.923.923,0,0,0-.662-.286h-.015a.934.934,0,0,0-.662.271l-5.675,5.464a.958.958,0,0,0-.286.677.932.932,0,0,0,.286.677l5.69,5.464a.973.973,0,0,0,.662.271.958.958,0,0,0,.677-.286.943.943,0,0,0,.271-.677A.859.859,0,0,0,32.085,18.6Z" transform="translate(32.386 20.224) rotate(180)" fill={color}/>
		</Svg>
	);
};


export default ArrowRight;
