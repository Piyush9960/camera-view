import "./App.css";
import Home from "views/HomePage";
import { Route, Switch } from "react-router-dom";
import ImagesGrid from "components/ImagesGrid";
import PageNotFound from "components/PageNotFound";
import Navbar from "components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/image-grid/:id" component={ImagesGrid} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
