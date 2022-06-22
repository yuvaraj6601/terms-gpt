import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import Assets from 'imports/assets.import';
import './checkbox.scss';

interface ICheckBoxProps {
  onPress?: any;
  checked?: boolean;
  selected?: any;
  multiple?: boolean;
}

const CheckBox = (props: ICheckBoxProps) => {
  return (
    <div>
      <div className="checked_icon_wrapper">
        {props.checked ? (
          <img
            src={Assets.checked}
            height={20}
            width={20}
            className="checked-icon"
            alt=""
          />
        ) : (
          <img
            src={Assets.uncheck}
            height={20}
            width={20}
            className="checked-icon"
            alt=""
          />
        )}
      </div>
      {/* // ) : (
      //   <div className="checkbox"></div>
      // )} */}
    </div>
  );
};

export default CheckBox;
