import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from './CounterSlice'


const MyCounter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter {count}</h1>
          <button onClick={() => dispatch(increment())}Increment>Increment</button> 
          <button>Decrement</button>
    </div>
  )
}

export default MyCounter