import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSetState } from 'utils/functions.utils';
import './nav_button.scss';

interface INavbutton {
  text?: String;
  icon: any;
  badge?: any;
  className?: any;
  onClick?: any;
}

const Navbutton = (props: INavbutton) => {
  return (
    <div
      className={`navbutton_wrapper ${props.className || ''}`}
      onClick={props.onClick}>
      <img src={props.icon} alt="icon" />
      {props.badge && <div className="navbutton_badge">{props.badge}</div>}
    </div>
  );
};

export default Navbutton;
