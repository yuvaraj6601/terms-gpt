import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Assets, Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import Modal from 'react-responsive-modal';
import { Camera } from 'react-camera-pro';
import './camera.ui.scss';
import Tesseract from 'tesseract.js';

interface ICameraComponent {
  text?: String;
  open: boolean;
  onClose?: any;
}

const CameraComponent = (props: ICameraComponent) => {
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({});

  //Hooks
  const camera: any = useRef(null);
  useEffect(() => {}, []);

  // Network req
  const testReq = async () => {
    try {
      const res: any = await Models.test.testRequest('body');
      console.log(res);
      //dispatch
      testDispatch({});
    } catch (error: any) {
      Functions.Failure(error);
    }
  };

  //Logic
  const testLogic = () => {};

  const textFromImage = async () => {
    try {
      let res: any = await Tesseract.recognize(state.image, 'eng', {
        logger: (m) => console.log('m', m),
      });
      console.log('res', res);
      props.onClose(res.data.text);
      setState({ image: '' });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={() => {
          props.onClose();
        }}
        classNames={{
          overlay: 'camera_customOverlay',
          modal: 'camera_customModal',
        }}
        closeIcon={false}>
        <div className="camera_container">
          {state.image ? (
            <img
              src={state.image}
              alt="Image preview"
              style={{ height: '100%', width: '100%' }}
            />
          ) : (
            <Camera
              ref={camera}
              errorMessages={{
                noCameraAccessible:
                  'No camera device accessible. Please connect your camera or try a different browser.',
                permissionDenied:
                  'Permission denied. Please refresh and give camera permission.',
                switchCamera:
                  'It is not possible to switch camera to different one because there is only one video device accessible.',
                canvas: 'Canvas is not supported.',
              }}
              facingMode="environment"
            />
          )}
        </div>
        <div className="camera_button_container">
          <div
            className="camera_cancel_button"
            onClick={() => {
              setState({ image: '' });
              props.onClose();
            }}>
            cancel
          </div>
          <div
            className="camera_click_button"
            onClick={() => {
              if (state.image) {
                setState({ image: '' });
              } else {
                const photo = camera.current.takePhoto();
                setState({ image: photo });
              }
            }}>
            <img src={state.image ? Assets.cameraRetake : Assets.cameraClick} />
          </div>
          <div
            className="camera_ok_button"
            onClick={() => {
              state.image
                ? textFromImage()
                : Functions.toastifyError('click a image');
            }}>
            ok
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CameraComponent;
