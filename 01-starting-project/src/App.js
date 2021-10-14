import { Route,Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/products";
import Welcome from "./pages/welcome";
function App() {
  return (
    <div>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Switch>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products" exact>
          <Products></Products>
        </Route>
        <Route path="/products/:productId">
          <ProductDetail></ProductDetail>
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
