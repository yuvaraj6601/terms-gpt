import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { testDispatch } from 'utils/redux.utils';
import { Button, ButtonProps } from '@mui/material';
import './primaryButton.scss';
import CircularProgress from '@mui/material/CircularProgress';

interface CustomButtonProps extends ButtonProps {
  activity?: boolean;
}

const PrimaryButton = (props: CustomButtonProps) => {
  return (
    <div>
      {props.activity ? (
        <div>
          <CircularProgress color="inherit" thickness={1} />
        </div>
      ) : (
        <Button {...props} />
      )}
    </div>
  );
};

export default PrimaryButton;
