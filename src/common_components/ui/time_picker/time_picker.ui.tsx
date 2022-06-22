import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSetState } from 'utils/functions.utils';
import './time_picker.ui.scss';
import TimeRange from 'react-time-range';

const TimePickerComponent = (props: any) => {
  return (
    <div className={`${props.className || ''} time_picker_wrapper`}>
      <TimeRange endLabel="" startLabel="" {...props} />
      {props.error &&
        props.error.map((error: any) => (
          <div className="input_field_error">
            {props.name === error?.path && error.message}
          </div>
        ))}
    </div>
  );
};

export default TimePickerComponent;
