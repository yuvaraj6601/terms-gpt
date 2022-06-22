import React from 'react';
import DatePicker from 'react-date-picker';
import './date_picker.ui.scss';

interface IDatePickerProps {
  value?: any;
  onChange?: any;
  className?: string;
}

const DatePickerComponent = (props: any) => {
  return (
    <div className={`${props.className || ''} date_picker_wrapper`}>
      <DatePicker
        onChange={(date: any) => {
          props.onChange(new Date(date));
        }}
        value={props.value || ''}
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

export default DatePickerComponent;
