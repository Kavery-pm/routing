import { Route } from "react-router-dom";
import Products from "./pages/products";
import Welcome from "./pages/welcome";
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
    </div>
  );
}

export default App;
