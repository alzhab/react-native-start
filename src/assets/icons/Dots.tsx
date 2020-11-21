import React, {ReactElement, useContext} from 'react';
import Svg, {Ellipse, G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Dots = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={3 * scale} height={12 * scale} viewBox="0 0 3 12">
			<G id="noun_dots_1215210" transform="translate(-42.797 29.958) rotate(-90)">
				<G id="Сгруппировать_36" data-name="Сгруппировать 36" transform="translate(17.958 42.797)">
					<Ellipse id="Эллипс_31" data-name="Эллипс 31" cx="1.381" cy="1.349" rx="1.381" ry="1.349" transform="translate(0 0)" fill={color}/>
					<Ellipse id="Эллипс_32" data-name="Эллипс 32" cx="1.381" cy="1.349" rx="1.381" ry="1.349" transform="translate(4.717 0)" fill={color}/>
					<Ellipse id="Эллипс_33" data-name="Эллипс 33" cx="1.381" cy="1.349" rx="1.381" ry="1.349" transform="translate(9.238 0)" fill={color}/>
				</G>
			</G>
		</Svg>
	);
};

export default Dots;
