import React, {ReactElement, useContext} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from '@types';

const Statistic = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={11 * scale} viewBox="0 0 12 11">
			<G transform="translate(18 -962.362)">
				<Path d="M5.267,960.362a.264.264,0,0,0-.267.262V971.1a.264.264,0,0,0,.267.262H16.733a.262.262,0,1,0,0-.524H5.533V960.624A.264.264,0,0,0,5.267,960.362Zm9.733,1.7a.929.929,0,0,0-.933.917.889.889,0,0,0,.192.548l-1.583,2.222a.971.971,0,0,0-.875.254l-1.117-.638a.878.878,0,0,0,.05-.291.933.933,0,0,0-1.867,0,.889.889,0,0,0,.192.548l-1.583,2.222a.945.945,0,0,0-.208-.02.917.917,0,1,0,.933.917.914.914,0,0,0-.263-.638l1.546-2.169a.918.918,0,0,0,.892-.143l1.179.675a.894.894,0,0,0-.021.18.933.933,0,0,0,1.867,0,.914.914,0,0,0-.263-.638l1.546-2.169A.919.919,0,1,0,15,962.065Zm0,.524a.393.393,0,1,1-.4.393A.393.393,0,0,1,15,962.588Zm-5.2,2.1a.393.393,0,1,1-.4.393A.392.392,0,0,1,9.8,964.684Zm2.667,1.571a.393.393,0,1,1-.4.393A.392.392,0,0,1,12.467,966.255Zm-5.2,2.1a.393.393,0,1,1-.4.393A.392.392,0,0,1,7.267,968.35Z" transform="translate(-23 2)" fill={color}/>
			</G>
		</Svg>
	);
};

export default Statistic;
