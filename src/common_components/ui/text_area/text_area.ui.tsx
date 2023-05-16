import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import './text_area.scss';

const TextArea = (props: any) => {
  // State
  const [state, setState] = useSetState({});

  return (
    <>
      <div className={state.focus ? 'text_area_active' : 'textarea_container'}>
        <textarea
          onBlur={() => {
            setState({ focus: false });
          }}
          onFocus={() => setState({ focus: true })}
          {...props}
          style={{ border: '0px', outline: '0px' }}
        />
        {props.count && (
          <div className="error_message_container">{props.count}</div>
        )}
      </div>
    </>
  );
};

export default TextArea;
