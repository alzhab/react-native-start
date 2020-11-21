import {NoticeTypeEnum} from '../../../stores/NoticeMessageStore';

export interface NoticeMessageProps {
  text: string;
  show: boolean;
  type: NoticeTypeEnum
}
