import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { Assets } from 'utils/imports.utils';
import './loader.scss';

const Loader = (props: any) => {
  return (
    <div className="loader_container">
      <img src={Assets.loader} className="loader" />
    </div>
  );
};

export default Loader;
