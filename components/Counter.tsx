import * as React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>
        Clicks:
        <strong>{count}</strong>
      </div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

export default Counter;
