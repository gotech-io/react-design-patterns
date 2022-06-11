import { useCounterContext } from './CounterProvider';

const CounterIncrementButton = () => {
  const { increment } = useCounterContext();
  return <button onClick={increment}>+</button>;
};

export default CounterIncrementButton;
