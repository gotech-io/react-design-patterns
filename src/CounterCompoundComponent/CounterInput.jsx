import { useCounterContext } from './CounterProvider';

const CounterInput = () => {
  const { count } = useCounterContext();
  return <div>{count}</div>;
};

export default CounterInput;
