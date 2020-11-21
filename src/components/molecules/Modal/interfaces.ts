export interface ModalProps {
  show: boolean;
  children: any;
  empty?: boolean;
  closeModal: () => void;
  full?: boolean;
}
