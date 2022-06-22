import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSetState } from 'utils/functions.utils';
import { Rating } from 'react-simple-star-rating';

const StarRating = (props: any) => {
  return (
    <div>
      <Rating {...props} />
    </div>
  );
};

export default StarRating;
