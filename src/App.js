import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>State Management Sederhana menggunakan React Redux</h1>
        <button onClick={() => dispatch(increment())}>Tambah 1</button>
        <button onClick={() => dispatch(decrement())}>Kurang 1</button>
        <p>Nilai saat ini : {counter.value}</p>
      </header>
    </div>
  );
}

export default App;
