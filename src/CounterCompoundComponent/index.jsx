import React from 'react';
import PropTypes from 'prop-types';
import { Orientation, Size } from '../enums';
import CounterProvider from './CounterProvider';
import CounterIncrementButton from './CounterIncrementButton';
import CounterDecrementButton from './CounterDecrementButton';
import CounterInput from './CounterInput';
import CounterFancyInput from './CounterFancyInput';

const Counter = CounterProvider;
Counter.IncrementButton = CounterIncrementButton;
Counter.DecrementButton = CounterDecrementButton;
Counter.Input = CounterInput;
Counter.FancyInput = CounterFancyInput;

const CounterCompoundComponent = ({ onChange, size, orientation, isRtl }) => {
  const props = { onChange, size, orientation, isRtl };
  return (
    <Counter {...props}>
      <Counter.DecrementButton />
      <Counter.Input />
      {/* <Counter.FancyInput /> */}
      <Counter.IncrementButton />
    </Counter>
  );
};

CounterCompoundComponent.propTypes = {
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  isRtl: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Size)),
  onChange: PropTypes.func,
};

CounterCompoundComponent.defaultProps = {
  orientation: Orientation.HORIZONTAL,
  isRtl: false,
  size: Size.MEDIUM,
  onChange: () => {},
};

export { Counter };
export default CounterCompoundComponent;
