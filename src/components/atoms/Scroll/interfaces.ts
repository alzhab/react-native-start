import {ReactElement} from 'react';

export interface Props {
  data: any[],
  bottom?: number,
  container?: boolean,
  horizontal?: boolean,
  loading?: boolean,
  item: (data: {item: any, index: number}) => ReactElement,
}
