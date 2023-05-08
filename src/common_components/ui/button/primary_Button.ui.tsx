import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { testDispatch } from 'utils/redux.utils';
import { Button, ButtonProps } from '@mui/material';
import './primaryButton.scss';

const PrimaryButton = (props: ButtonProps) => {
  return (
    <div>
      <Button {...props} />
    </div>
  );
};

export default PrimaryButton;
