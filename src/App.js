import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  // const clickHandler = (act) => {
  //   switch (act){
  //     case "increment":
  //       useDispatch(increment);
  //     case "decrement":
  //       useDispatch(decrement);
  //   }
  // }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged? <p>User is Logged In</p>: <p>not logged in</p> } 
      </div>
  );
}

export default App;
