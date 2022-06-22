import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useSetState } from 'utils/functions.utils';
import {
  Functions,
  Models,
  Navbutton,
  Assets,
  Input,
  Tag,
  Dropdown,
  PrimaryButton,
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './invite_modal.ui.scss';

const InviteModal = forwardRef((props: any, ref) => {
  // Reference
  const modalRef: any = useRef();

  // State
  const [state, setState] = useSetState({
    isModalOpen: false,
    time_zone: '',
    first_name: '',
    last_name: '',
    role: [],
  });

  // Network req

  useImperativeHandle(ref, () => ({
    openModal() {
      setState({ isModalOpen: true });
    },
    closeModal() {
      setState({ isModalOpen: false });
    },
  }));

  //Logic

  const dropdowndata = [
    { label: 'ABC Agency', name: 'abc agency' },
    { label: 'ABC Agency', name: 'abc agency' },
  ];
  return (
    <div>
      <Modal
        open={state.isModalOpen}
        ref={modalRef}
        onClose={() => {
          setState({ isModalOpen: false });
        }}
        closeOnOverlayClick
        center
        showCloseIcon={false}
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
        <div className="invite_container">
          <div className="invite_wrapper">
            <div className="invite_header">
              <div className="invite_heading">User invite</div>
              <Navbutton
                icon={Assets.black_close}
                onClick={() => {
                  setState({ isModalOpen: false });
                }}
              />
            </div>
            <div className="invite_subheading">Agency</div>
            <Dropdown data={dropdowndata} />
            <div className="invite_send_button">
              <PrimaryButton
                text={'Send Invite'}
                className={'send_invite_button'}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default InviteModal;
