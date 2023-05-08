import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';

interface IIcon {
  src: any;
}

const Icon = (props: IIcon) => {
  // Redux

  // State

  //Hooks

  // Network req

  //Logic
  const testLogic = () => {};

  return (
    <>
      <img src={props.src} />
    </>
  );
};

export default Icon;
