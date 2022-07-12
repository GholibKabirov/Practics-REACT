import "./App.css";
import baby from "./baby.png";
function App() {
  return (
    <div className="divglavni">
      <div className="div1">Card number</div>
      <div className="div2">Name on card</div>
      <div className="div3">
        <div className="divchild1">MM/YY</div>
        <div className="divchild2">CVC</div>
        <div></div>
      </div>
      <button className="button">PAY NOW</button>
      <img className="img" src={baby} />
    </div>
  );
}

export default App;
