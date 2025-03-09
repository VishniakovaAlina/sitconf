import { ModalBody } from './ModalBody/ModalBody';
import { ModalHeader } from './ModalHeader/ModalHeader';
import { Modal } from './Modal';

type ModalType = typeof Modal;
type ModalHeaderType = typeof ModalHeader;
type ModalBodyType = typeof ModalBody;

interface ICommonModalComponent extends ModalType {
  Header: ModalHeaderType;
  Body: ModalBodyType;
}

const CommonModalComponent: ICommonModalComponent = Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
});

export default CommonModalComponent;
