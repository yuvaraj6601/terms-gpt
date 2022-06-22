import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ClipBoard = (props: any) => {
  return <CopyToClipboard {...props}>{props.children}</CopyToClipboard>;
};

export default ClipBoard;
