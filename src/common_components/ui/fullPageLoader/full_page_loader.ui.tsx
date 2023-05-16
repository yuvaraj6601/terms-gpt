import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import CircularProgress from '@mui/material/CircularProgress';

interface IFullPageLoader {
  text?: String;
}

const FullPageLoader = (props: IFullPageLoader) => {
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({});

  //Hooks
  useEffect(() => {}, []);

  // Network req
  const testReq = async () => {
    try {
      const res: any = await Models.test.testRequest('body');
      console.log(res);
      //dispatch
      testDispatch({});
    } catch (error: any) {
      Functions.Failure(error);
    }
  };

  //Logic
  const testLogic = () => {};

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.7)',
          position: 'absolute',
          top: 0,
        }}>
        <CircularProgress />
      </div>
    </>
  );
};

export default FullPageLoader;
