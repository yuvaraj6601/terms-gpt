import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import MultiRangeSlider from 'multi-range-slider-react';
import './slider.scss';

const SliderComponent = (props: any) => {

  // State
  const [state, setState] = useSetState({
    valueNow: '',
    minValue: 1,
    maxValue: 100,
  });

  return (
    <>
      <MultiRangeSlider
        min={0}
        max={100}
        step={5}
        ruler={false}
        label={false}
        preventWheel={false}
        minValue={state.minValue}
        maxValue={state.maxValue}
        onInput={(e) => {
          setState({ minValue: e.minValue, maxValue: e.maxValue });
        }}
        {...props}
      />
    </>
  );
};

export default SliderComponent;