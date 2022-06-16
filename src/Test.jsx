import React,{useState} from 'react'

const Test = () => {
    const [count,setCount] = useState(0);
    const inc = ()=>{
        setCount(count + 1)
    }
    const dec = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
  return (
    <div>
        <button onClick={inc}>+</button>
        <h2>{count}</h2>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Test