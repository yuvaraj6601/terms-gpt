import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { useSetState } from 'utils/functions.utils';
import './multiselect_dropdown.scss';

const MultiSelectDropdown = (props: any) => {
  // Redux

  // State
  const [state, setState] = useSetState({});

  //Hooks
  useEffect(() => {
    setState({ options: props?.data });
  }, [props.data]);


  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });

  const handleChange = (newValue: any, actionMeta: any) => {
    setState({ value: newValue });
    props?.onChange(newValue);
  };

  const handleCreate = (inputValue: string) => {
    setState({ isLoading: true });
    const newOption = createOption(inputValue);
    setState({
      isLoading: false,
      options: [...props.data, newOption],
      value: newOption,
    });
    props?.onChange([...props.value, newOption]);
    setState({ isLoading: false });
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
    <div className="multiselect_dropdown_wrapper">
      <CreatableSelect
        isClearable
        isMulti
        styles={customStyles}
        value={props.value}
        // isDisabled={state.isLoading}
        // isLoading={state.isLoading}
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={state.options}
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

export default MultiSelectDropdown;
