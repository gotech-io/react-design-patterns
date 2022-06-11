import React from 'react';
import Counter from './Counter';
import CounterRenderProps from './CounterRenderProps';
import CounterWithHOC from './CounterWithHOC';
import CounterUseHooks from './CounterUseHooks';
import CounterCompoundComponent from './CounterCompoundComponent';

import './App.css';

const App = () => {
  const onChange = (count) => console.log(`Count is ${count}`);
  return (
    <div className="App">
      <h2>Regular Component</h2>
      <Counter onChange={onChange} />
      <h2>withHOC</h2>
      <CounterWithHOC onChange={onChange} />
      <h2>Render Props</h2>
      <CounterRenderProps onChange={onChange} />
      <h2>useHooks</h2>
      <CounterUseHooks onChange={onChange} />
      <h2>Compound Components</h2>
      <CounterCompoundComponent onChange={onChange} />
    </div>
  );
};

export default App;
