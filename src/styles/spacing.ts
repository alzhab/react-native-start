import {scaleSize} from './mixins';
import {Platform} from 'react-native';

export const CONTAINER_HOR_PADDING = scaleSize(20);
export const CONTAINER_VER_PADDING = scaleSize(Platform.OS === 'ios' ? 50 : 25);
export const MODAL_HOR_PADDING = scaleSize(20);
