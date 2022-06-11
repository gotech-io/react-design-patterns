import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Orientation, Size } from './enums';

const CounterLogic = ({ onChange, children }) => {
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

  return children({ count, increment, decrement });
};

CounterLogic.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.func.isRequired,
};

CounterLogic.defaultProps = {
  onChange: () => {},
};

const CounterRenderProps = ({
  onChange,
  size,
  orientation,
  isRtl,
  inputElement,
}) => {
  return (
    <CounterLogic
      onChange={onChange}
      // Also possible to pass it as children
    >
      {({ count, increment, decrement }) => (
        <div
          className={classNames(
            'counter',
            size,
            orientation,
            isRtl ? 'rtl' : ''
          )}
        >
          <button onClick={decrement}>-</button>
          {inputElement.type === 'input'
            ? React.createElement(inputElement.type, { value: count })
            : React.createElement(inputElement.type, { children: count })}
          <button onClick={increment}>+</button>
        </div>
      )}
    </CounterLogic>
  );
};

CounterRenderProps.propTypes = {
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  inputElement: PropTypes.node,
  isRtl: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Size)),
  onChange: PropTypes.func,
};

CounterRenderProps.defaultProps = {
  orientation: Orientation.HORIZONTAL,
  inputElement: <div></div>,
  isRtl: false,
  size: Size.MEDIUM,
  onChange: () => {},
};

export { CounterLogic };
export default CounterRenderProps;
