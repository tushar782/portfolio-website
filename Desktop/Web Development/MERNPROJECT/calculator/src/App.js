import { useState } from 'react';
import './App.css';

function App() {
  const [total , setTotal] = useState('');
  const handleClick = (e) => {
    setTotal(total.concat(e.target.name))
  }
  const clear = () => {
    setTotal("");
  }
  const handleDelete = () => {
    setTotal(total.slice(0 , -1));
  }
  const calculate = () => {
    try {
      if (total.trim() === '') {
        setTotal('');
      } else {
        setTotal(eval(total).toString());
      }
    } catch (error) {
      setTotal('Error');
    }
  };
  
  
  return (
    <>
      <div className="card bg-light text-center ">
        <div className="card-body">
          <h1>Calculator</h1>
        </div>
      </div>
      <div className="container mt-3">
        <form>
        <input type="text" value={total} onChange={(e) => setTotal(e.target.value)} />
        </form>
        <div className="keypad">
          <button id="clear" onClick={clear} className="heighlight">AC</button>
          <button onClick={handleDelete} id="heighlight">DEL</button>
          <button name="/" onClick={handleClick} className="heighlight">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8"  onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className="heighlight">&times;</button>
          <button name="4"  onClick={handleClick}>4</button>
          <button name="5"  onClick={handleClick}>5</button>
          <button name="6"  onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className="heighlight">-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className="heighlight">+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id="equal" className="heighlight">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
