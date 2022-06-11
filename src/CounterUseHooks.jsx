import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Orientation, Size } from './enums';

const useCounter = (onChange) => {
  const [count, setCount] = useState(0);

  const increment = () =>
    setCount((prev) => {
      onChange(prev + 1);
      return prev + 1;
    });

  const decrement = () =>
    setCount((prev) => {
      onChange(prev - 1);
      return prev - 1;
    });

  return { count, increment, decrement };
};

const CounterUseHooks = ({
  onChange,
  size,
  orientation,
  isRtl,
  inputElement,
}) => {
  const { count, increment, decrement } = useCounter(onChange);
  return (
    <div
      className={classNames('counter', size, orientation, isRtl ? 'rtl' : '')}
    >
      <button onClick={decrement}>-</button>
      {inputElement.type === 'input'
        ? React.createElement(inputElement.type, { value: count })
        : React.createElement(inputElement.type, { children: count })}
      <button onClick={increment}>+</button>
    </div>
  );
};

CounterUseHooks.propTypes = {
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  inputElement: PropTypes.node,
  isRtl: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Size)),
  onChange: PropTypes.func,
};

CounterUseHooks.defaultProps = {
  orientation: Orientation.HORIZONTAL,
  inputElement: <div></div>,
  isRtl: false,
  size: Size.MEDIUM,
  onChange: () => {},
};

export { useCounter };
export default CounterUseHooks;
