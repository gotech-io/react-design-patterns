import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Orientation, Size } from './enums';

const Counter = ({ orientation, inputElement, isRtl, size, onChange }) => {
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

Counter.propTypes = {
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  inputElement: PropTypes.node,
  isRtl: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Size)),
  onChange: PropTypes.func,
};

Counter.defaultProps = {
  orientation: Orientation.HORIZONTAL,
  inputElement: <div></div>,
  isRtl: false,
  size: Size.MEDIUM,
  onChange: () => {},
};

export default Counter;
