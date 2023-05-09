import React, { useEffect } from 'react';
import { useSetState } from 'utils/functions.utils';
import { TextField, TextFieldProps } from '@mui/material';

const Input = (props: TextFieldProps) => {
  // State
  const [state, setState] = useSetState({ focus: false });

  return (
    <>
      <TextField {...props} />
    </>
  );
};

export default Input;
