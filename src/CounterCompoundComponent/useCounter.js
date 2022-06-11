import { useState } from 'react';

// Same hook as before
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

export default useCounter;
