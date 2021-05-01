import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.MAIN;

  const size = props.sizeHeight;
  const width = 12;
  const height = 14;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M235.56-61.977a.435.435,0,0,1,.439.43v12.3a.436.436,0,0,1-.439.43H224.439a.436.436,0,0,1-.439-.43v-12.3a.435.435,0,0,1,.439-.43h1.923v-.411a.436.436,0,0,1,.439-.43.435.435,0,0,1,.439.43v.411h2.351v-.411a.436.436,0,0,1,.439-.43.435.435,0,0,1,.439.43v.411h2.336v-.411a.436.436,0,0,1,.439-.43.435.435,0,0,1,.439.43v.411Zm-2.072,2.422a.2.2,0,0,0-.008-.058.448.448,0,0,1-.468,0,.186.186,0,0,0-.009.058.238.238,0,0,0,.243.233A.238.238,0,0,0,233.488-59.555Zm-3.217,0a.194.194,0,0,0-.008-.057.447.447,0,0,1-.468,0,.2.2,0,0,0-.009.06.238.238,0,0,0,.243.233A.238.238,0,0,0,230.271-59.555Zm-3.909-1v-.561h-1.483v11.439h10.243V-61.117h-1.436v.561a1.086,1.086,0,0,1,.682,1,1.109,1.109,0,0,1-1.121,1.093,1.109,1.109,0,0,1-1.121-1.093,1.085,1.085,0,0,1,.682-1v-.561H230.47v.562a1.086,1.086,0,0,1,.68,1,1.109,1.109,0,0,1-1.122,1.093,1.109,1.109,0,0,1-1.121-1.093,1.086,1.086,0,0,1,.685-1v-.56h-2.351v.561a1.086,1.086,0,0,1,.682,1,1.109,1.109,0,0,1-1.122,1.093,1.109,1.109,0,0,1-1.121-1.093A1.087,1.087,0,0,1,226.362-60.557Zm.682,1a.2.2,0,0,0-.008-.058.449.449,0,0,1-.469,0,.2.2,0,0,0-.009.058.238.238,0,0,0,.243.233A.238.238,0,0,0,227.044-59.555Zm2.192,3.879a.435.435,0,0,1-.439-.43.435.435,0,0,1,.439-.43h3.985a.435.435,0,0,1,.439.43.435.435,0,0,1-.439.43Zm-2.434.568a.435.435,0,0,1-.439-.43v-1.174a.435.435,0,0,1,.439-.43h1.189a.435.435,0,0,1,.439.43v1.174a.435.435,0,0,1-.439.43Zm.439-.86h.31v-.314h-.31Zm2,2.586a.435.435,0,0,1-.439-.43.435.435,0,0,1,.439-.43h3.985a.435.435,0,0,1,.439.43.435.435,0,0,1-.439.43Zm0,2.294a.435.435,0,0,1-.439-.43.435.435,0,0,1,.439-.43h3.985a.435.435,0,0,1,.439.43.435.435,0,0,1-.439.43ZM226.8-52.813a.435.435,0,0,1-.439-.43v-1.174a.435.435,0,0,1,.439-.43h1.189a.436.436,0,0,1,.439.43v1.174a.436.436,0,0,1-.439.43Zm.439-.861h.31v-.314h-.31ZM226.8-50.52a.435.435,0,0,1-.439-.43v-1.174a.435.435,0,0,1,.439-.43h1.189a.435.435,0,0,1,.439.43v1.174a.435.435,0,0,1-.439.43Zm.439-.86h.31v-.314h-.31Z"
        transform="translate(-224 62.818)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
