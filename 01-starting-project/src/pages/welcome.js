import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>Hello</h1>
      <Route path="/welcome/new-users">
        <h1>WELCOME </h1>
      </Route>
    </section>
  );
};
export default Welcome;
