import React, {ReactElement} from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';
import {IconProps} from '@types';

const English = (props: IconProps): ReactElement => {
	const scale = props.scale || 1;
 
	return (
		<Svg width={12 * scale} height={6 * scale} viewBox="0 0 12 6">
			<Rect id="rect124" width={12 * scale} height={6 * scale} fill="#006"/>
			<G id="g584">
				<Path id="path146" d="M0,0V.671L10.658,6H12V5.329L1.342,0H0ZM12,0V.671L1.342,6H0V5.329L10.658,0Z" fill="#fff"/>
				<Path id="path136" d="M5,0V6H7V0ZM0,2V4H12V2Z" fill="#fff"/>
				<Path id="path141" d="M0,2.4V3.6H12V2.4ZM5.4,0V6H6.6V0Z" fill="#c00"/>
				<Path id="path150" d="M0,6,4,4h.894l-4,2ZM0,0,4,2H3.106L0,.447V0ZM7.106,2l4-2H12L8,2ZM12,6,8,4h.894L12,5.553Z" fill="#c00"/>
			</G>
		</Svg>
	);
};

export default English;
