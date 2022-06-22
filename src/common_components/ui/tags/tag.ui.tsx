import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models, Assets } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './tag.ui.scss';

interface ITag {
  text: String;
  className?: String;
  icon?: any;
  onClick?: any;
  profile_picture?: any;
}

const Tag = (props: ITag) => {
  return (
    <div className={`tag_container ${props.className}`}>
      <div className="tag_user_details">
        <img
          src={props.profile_picture || Assets.profile_placeholder}
          className="tag_profile"
          alt={'close'}
        />
        <div className="tag_text">{props.text}</div>
      </div>
      {props.icon && (
        <div className="tag_icon" onClick={props.onClick}>
          <img src={props.icon} alt={'close'} />
        </div>
      )}
    </div>
  );
};

export default Tag;
