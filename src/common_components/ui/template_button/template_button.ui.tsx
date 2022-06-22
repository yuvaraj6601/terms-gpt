import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import './template_button.scss';

interface ITemplateButtonProps {
  text?: String;
  selected?: boolean;
  onClick?: any;
}

const TemplateButton = (props: ITemplateButtonProps) => {
  return (
    <div
      className={`${
        props.selected && 'selected_template'
      } template_btn_wrapper`}
      onClick={props.onClick}>
      {props.text}
    </div>
  );
};

export default TemplateButton;
