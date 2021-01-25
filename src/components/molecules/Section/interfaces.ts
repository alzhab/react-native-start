import {ReactElement} from 'react';

export interface Props {
  title: string;
  right?: ReactElement,
  children: any,
  headerBottom?: number,
  bottom?: number,
  headerContainer?: boolean;
  contentContainer?: boolean;
}
