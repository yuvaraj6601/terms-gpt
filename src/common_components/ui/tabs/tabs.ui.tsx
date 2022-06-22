import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { testDispatch } from 'utils/redux.utils';
import './tabs.scss';

interface ITabsProps {
  data?: any;
  selected?: any;
}

const Tabs = (props: ITabsProps) => {

  // State
  const [state, setState] = useSetState({ active: '' });

  //Hooks
  useEffect(() => {
    setState({ active: props?.data[0] });
    props.selected(props?.data[0]);
  }, []);

  //Logic
  const setActiveTab = (item: string) => {
    setState({ active: item });
    props.selected(item);
  };

  return (
    <div className="tab_wrapper">
      {props.data.map((item: any) => (
        <div
          className={`${state.active === item && 'tab_active'} tab_container`}
          onClick={() => setActiveTab(item)}>
          <div className={`${state.active === item && 'active_text'} tab_text`}>
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
