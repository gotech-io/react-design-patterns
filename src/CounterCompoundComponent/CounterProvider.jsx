import React, { createContext, useContext } from 'react';
import classNames from 'classnames';
import useCounter from './useCounter';

const CounterContext = createContext({});

const CounterProvider = ({ onChange, size, orientation, isRtl, children }) => {
  const { count, increment, decrement } = useCounter(onChange);

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        size,
        orientation,
        isRtl,
      }}
    >
      <div
        className={classNames('counter', size, orientation, isRtl ? 'rtl' : '')}
      >
        {children}
      </div>
    </CounterContext.Provider>
  );
};

const useCounterContext = () => useContext(CounterContext);

export { useCounterContext };
export default CounterProvider;
