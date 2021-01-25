import React, {ReactElement} from 'react';
import FastImage, {Source} from 'react-native-fast-image';

const Image = (props: {
  style?: any,
  source: Source | number, resizeMode?:
    'contain' |
    'cover' |
    'stretch' |
    'center'
}): ReactElement => {
	return (
		<>
			<FastImage
				style={[
          {width: '100%', height: '100%'},
          props.style
        ]}
				source={props.source}
				resizeMode={FastImage.resizeMode[props.resizeMode || 'cover']}
			>
			</FastImage>
		</>
	);
};

export default Image;
