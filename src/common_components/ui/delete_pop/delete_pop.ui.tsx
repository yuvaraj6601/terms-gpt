import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-responsive-modal';
import { useSetState } from 'utils/functions.utils';
import { Assets, Functions, Models, PrimaryButton } from 'utils/imports.utils';
import './delete_pop.scss';

interface IDeletePop {
  text: String;
  onClick: any;
  onCancel: any;
  open: boolean;
}

const DeletePop = (props: IDeletePop) => {
  // Reference
  const modalRef: any = useRef();

  // State
  const [state, setState] = useSetState({});

  return (
    <div>
      <Modal
        onClose={() => {
          setState({ isModalOpen: false });
        }}
        ref={modalRef}
        closeOnOverlayClick
        center
        showCloseIcon={false}
        classNames={{
          overlay: 'customOverlay',
          modal: 'delete_pop_modal',
        }}
        open={props.open}>
        <div className="delete_pop_container">
          <div className="input_heading">{props.text}</div>
          <div className="delete_pop_button_wrapper">
            <PrimaryButton
              onClick={props.onClick}
              text={'Delete'}
              className={'delete_pop_btn'}
              icon={Assets.trash_white}
            />
            <PrimaryButton
              onClick={props.onCancel}
              text={'Cancel'}
              className={'delete_pop_btn_cancel'}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePop;
