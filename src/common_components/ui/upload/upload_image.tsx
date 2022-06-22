import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models, Assets } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import '../upload/upload_image.scss';

interface IUploadComponent {
  className?: string;
  icon_class?: any;
  icon: any;
  iconOnClick?: any;
  onChange?: any;
  image?: any;
}

const UploadComponent = (props: IUploadComponent) => {
  return (
    <div
      className={`${
        !props.image ? 'upload_image_container' : 'upload_image_wrapper'
      } ${props.className}`}>
      {props?.image ? (
        <img className="profile_picture" src={props?.image} />
      ) : (
        <label className="upload_box_label_content">
          <div className="upload_box_title p6">
            <img
              src={props.icon}
              alt="camera_image"
              className={`camera_image ${props.icon_class}`}
            />
          </div>
          <input
            type={'file'}
            className={'upload_box'}
            onChange={(e) => props.onChange(e.target.files)}
          />
        </label>
      )}
      {props?.image && (
        <div
          className="upload_close_wrapper"
          onClick={() => props.iconOnClick()}>
          <img className="upload_close_icon" src={Assets.close} />
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
