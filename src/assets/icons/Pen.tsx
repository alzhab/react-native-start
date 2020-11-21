import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Pen = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox='0 0 12 12'>
			<G transform="translate(260.987 -137.903)">
				<G transform="translate(-260.987 137.903)">
					<G transform="translate(0 0)">
						<G transform="translate(0 0)">
							<G transform="translate(0 0)">
								<Rect width={12 * scale} height={12 * scale} transform="translate(0.167 0.097)" fill="none"/>
								<Path d="M17.191,10.525,14.15,7.488,21.11.526a1.809,1.809,0,0,1,2.558,0l.481.481a1.811,1.811,0,0,1,0,2.558ZM15.474,7.488l1.719,1.719,6.295-6.3a.872.872,0,0,0,0-1.234l-.481-.483a.876.876,0,0,0-1.235,0Z" transform="translate(-12.426 0.004)" fill={color}/>
								<Path d="M.691,71.208a.578.578,0,0,1-.56-.727l.756-2.845a.614.614,0,0,1,1.029-.278L3.961,69.4a.614.614,0,0,1-.276,1.029l-2.85.756A.553.553,0,0,1,.691,71.208Zm.958-2.794-.456,1.712,1.719-.456Z" transform="translate(-0.112 -58.928)" fill={color}/>
								<Path d="M65.344,14.832a.463.463,0,0,1-.33-.138l-2.153-2.151a.468.468,0,1,1,.662-.662l2.151,2.153a.468.468,0,0,1-.33.8Z" transform="translate(-55.035 -10.301)" fill={color}/>
							</G>
						</G>
					</G>
				</G>
			</G>
		</Svg>
	);
};

export default Pen;

