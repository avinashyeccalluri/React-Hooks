import { useState } from 'react';

const UseState = () => {

    const [count, setCount] = useState(0)
    function decrement(){
      setCount((preCount) => {
        setCount(preCount - 1);
      })
    }
  
    function increment() {
      setCount((preCount) => {
        setCount(preCount + 1);
      })
    }
    
    return (
      <div className="">
        <button onClick={()=>decrement()}>-</button>
        <span>{ count}</span>
        <button onClick={()=>increment()}>+</button>
      </div>
    );
}

export default UseState
