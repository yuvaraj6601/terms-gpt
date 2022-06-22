import React from 'react';
import { Assets } from 'utils/imports.utils';
import './certification.ui.scss';

interface ICertification {
  data?: any;
  title?: string;
  type?: string;
  onClick?: any;
}

const Certification = (props: ICertification) => {
  return (
    <div className="certification_container">
      <div className="certification_wrapper">
        <div className="certification_header">{props.title}</div>
        <div className="certification_type">{props.type}</div>
        <div className="certification_year">{props?.type}</div>
      </div>
      <div className="certification_close_icon">
        <img
          onClick={props.onClick}
          src={Assets.black_close}
          alt="close-icon"
        />
      </div>
    </div>
  );
};

export default Certification;
