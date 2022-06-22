import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './toggle_header.scss';

interface IToggleHeader {
  data?: any;
  onChange?: any;
}

const ToggleHeader = (props: IToggleHeader) => {
  // State
  const [state, setState] = useSetState({
    active: '',
  });

  //Hooks
  useEffect(() => {
    setState({ active: props.data[0] });
  }, []);

  return (
    <div className="toggle_header_container">
      {props.data.map((item) => (
        <div
          className={`${
            state.active === item && 'toggle_header_active'
          } toggle_header_wrapper
          `}
          onClick={() => {
            props.onChange(item);
            setState({ active: item });
          }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ToggleHeader;
