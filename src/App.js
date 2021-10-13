import './App.css';
import { Link  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1 className="rainbow-text">Homepage of the one and only shop for youuu!</h1>
      <p className="rainbow-text">with annoying text that wont stop moving</p>
      <Link className="link" to="/shop"><h2>START SHOPPING NOW!</h2></Link>
    </div>
  );
}

export default App;
