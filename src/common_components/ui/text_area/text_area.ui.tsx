import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models } from 'utils/imports.utils';
import './text_area.scss';

const TextArea = (props: any) => {
  // State
  const [state, setState] = useSetState({});

  return (
    <div style={{ width: '100%' }}>
      <textarea
        onBlur={() => {
          setState({ focus: false });
        }}
        className={state.focus ? 'active' : ''}
        onFocus={() => setState({ focus: true })}
        {...props}
      />
      {props.error &&
        props.error.map((error: any) => (
          <div className="input_field_error">
            {props.name === error?.path && error.message}
          </div>
        ))}
    </div>
  );
};

export default TextArea;
