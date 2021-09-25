import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom";

export default function NestingExample() {
  return (
    <Router>
      <Nesting></Nesting>
    </Router>
  );
}

function Nesting() {
  const { pathname } = useLocation();

  return (
    <Router>
      <div>
        <Link to="restaurants">Res</Link>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Top></Top>
          <Route path="/kuchhAur">
            <KucchAur></KucchAur>
          </Route>
          <Route path="/notFound">
            <NotFound></NotFound>
          </Route>
          <Route path="/restaurants">
            <Topics />
          </Route>
          <Route path="*">
            <Redirect to={`/notFound?path=${pathname}`}></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  const { search } = useLocation();

  const urlSearchParams = new URLSearchParams(search);

  return (
    <>
      {" "}
      Not found <pre> {urlSearchParams.get("path")} </pre>
    </>
  );
}

function KucchAur() {
  return "Kuchh aur";
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Top() {
  return (
    <ul className="p-4 bg-gray-600 border">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/kuchhAur"> Kuchh Aur </Link>
      </li>
      <li>
        <Link to="/anything">Not Found</Link>
      </li>
    </ul>
  );
}

function Topics() {
  const { pathname } = useLocation();

  return (
    <div>
      <Top></Top>
      <ul className="p-4 bg-gray-300 border">
        <li>
          <Link to={`/restaurants/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`/restaurants/components`}>Components</Link>
        </li>
        <li>
          <Link to={`/restaurants/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`/restaurants/rendering`}>
          rendering
        </Route>

        <Route exact path={`/restaurants/components`}>
          components
        </Route>

        <Route exact path={`/restaurants/props-v-state`}>
          props-v-state
        </Route>

        <Route exact path={`/restaurants`}>
          Restorent
        </Route>

        <Route path={`*`}>
          <Redirect to={`/notFound?path=${pathname}`}></Redirect>
        </Route>
      </Switch>
    </div>
  );
}
