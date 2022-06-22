import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import './circular_progress.scss';

const CircularProgress = (props: any) => {
  return (
    <div>
      <CircularProgressbarWithChildren
        value={66}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: 'red',
        })}
        {...props}>
        <div className="circular_progress_text">{props.title}</div>
        <div className="circular_progress_value">{props.percentage}</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgress;
