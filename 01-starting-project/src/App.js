import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/products";
import Welcome from "./pages/welcome";
function App() {
  return (
    <div>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
      </main>
    </div>
  );
}

export default App;
