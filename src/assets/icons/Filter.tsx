import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Filter = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={10 * scale} viewBox="0 0 12 10">
			<G transform="translate(-1445 6)">
				<G transform="translate(1445 -6)">
					<G transform="translate(0)">
						<Path d="M19.524,20.1a1.571,1.571,0,0,0-1.5,1.13h-1.6a.422.422,0,0,0-.423.442.437.437,0,0,0,.441.442h1.6a1.555,1.555,0,0,0,1.5,1.13,1.576,1.576,0,0,0,1.515-1.13h6.5a.442.442,0,0,0,0-.883h-6.5A1.614,1.614,0,0,0,19.524,20.1Zm.018.883a.689.689,0,1,1-.687.689A.689.689,0,0,1,19.542,20.983Z" transform="translate(-16 -20.1)" fill={color}/>
					</G>
					<G transform="translate(0 3.265)">
						<Path d="M24.828,40.1a1.571,1.571,0,0,0-1.5,1.13h-6.89a.426.426,0,0,0-.441.442.437.437,0,0,0,.441.442h6.89a1.555,1.555,0,0,0,1.5,1.13,1.576,1.576,0,0,0,1.515-1.13h1.216a.442.442,0,0,0,0-.883H26.344A1.576,1.576,0,0,0,24.828,40.1Zm.018.883a.689.689,0,1,1-.687.689A.678.678,0,0,1,24.846,40.983Z" transform="translate(-16 -40.1)" fill={color}/>
					</G>
					<G transform="translate(0 6.856)">
						<Path d="M21.639,62.1a1.571,1.571,0,0,0-1.5,1.13h-3.7a.426.426,0,0,0-.441.442.437.437,0,0,0,.441.442h3.718a1.555,1.555,0,0,0,1.5,1.13,1.576,1.576,0,0,0,1.515-1.13h4.388a.442.442,0,0,0,0-.883H23.154A1.576,1.576,0,0,0,21.639,62.1Zm.018.883a.689.689,0,1,1-.687.689A.7.7,0,0,1,21.656,62.983Z" transform="translate(-16 -62.1)" fill={color}/>
					</G>
				</G>
			</G>
		</Svg>
	);
};

export default Filter;
