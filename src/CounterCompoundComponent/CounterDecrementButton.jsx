import { useCounterContext } from './CounterProvider';

const CounterDecrementButton = () => {
  const { decrement } = useCounterContext();
  return <button onClick={decrement}>-</button>;
};

export default CounterDecrementButton;
