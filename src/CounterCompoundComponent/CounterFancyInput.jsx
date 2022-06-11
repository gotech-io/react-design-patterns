import { Size } from '../enums';
import { useCounterContext } from './CounterProvider';

const getSize = (size) => {
  switch (size) {
    case Size.SMALL:
      return 12;
    case Size.MEDIUM:
      return 22;
    case Size.LARGE:
      return 32;
    default:
      return 22;
  }
};

const CounterFancyInput = () => {
  const { count, size } = useCounterContext();

  return (
    <input
      type="text"
      value={count}
      disabled
      style={{
        width: 50,
        backgroundColor: 'turquoise',
        color: 'white',
        fontWeight: 'bold',
        fontSize: getSize(size),
        textAlign: 'center',
      }}
    />
  );
};

export default CounterFancyInput;
