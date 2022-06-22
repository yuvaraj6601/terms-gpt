import React, { useEffect } from 'react';
import { useSetState } from 'utils/functions.utils';
import './dropdown.scss';
import Select from 'react-select';

interface IDropdownProps {
  text?: String;
  data: any;
  setActive?: any;
}

const InputDropdown = (props: any) => {
  // State
  const [state, setState] = useSetState({
    isOpen: false,
    active: '',
  });

  //Hooks
  useEffect(() => {
    setState({ active: props.data[0] });
  }, []);

  //Logic
  const handleChange = () => {
    setState({ isOpen: !state.isOpen });
  };
  const setActive = (value) => {
    setState({ active: value, isOpen: !state.isOpen });
    props?.setActive(value);
  };
  const customStyles: any = {
    multiValueRemove: (provided, state) => ({
      ...provided,
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'white',
      },
    }),
  };
  return (
    <div>
      <Select
        maxMenuHeight={200}
        styles={customStyles}
        options={props.data}
        onChange={(option: any) => props.setActive(option)}
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

export default InputDropdown;
