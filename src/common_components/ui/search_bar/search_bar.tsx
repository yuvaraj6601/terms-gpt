import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models, Assets } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './search_bar.scss';

interface ISearchbar {
  text?: String;
  className?: string;
  onChange?: any;
  onPress?: any;
  value?: string;
  name?: string;
  iconOnPress?: any;
}

const Searchbar = (props: ISearchbar) => {
  // State
  const [state, setState] = useSetState({});

  return (
    <div
      className={
        state.focus
          ? 'search_bar_focus search_input_container search_bar_set_bg'
          : 'search_input_container'
      }>
      <div
        className="icon_wrapper"
        onClick={() => {
          props?.iconOnPress();
        }}>
        <img src={Assets.search} alt="image" className={`input_icon `} />
      </div>
      <input
        type={'text'}
        className={
          state.focus
            ? `search_bar_set_bg input ${props.className || ''}`
            : `input ${props.className || ''}`
        }
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        name={props.name}
        placeholder="Search by name or email"
        onFocus={() => setState({ focus: true })}
        onBlur={() => setState({ focus: false })}
      />
    </div>
  );
};

export default Searchbar;
