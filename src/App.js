import GlobalStyles from "./components/GlobalStyles"
import {Route, Switch, useLocation} from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Discoverpage from "./pages/Discoverpage"
import Formpage from "./pages/Formpage"
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <GlobalStyles />
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
      <Mainpage />
      </Route>
      <Route path="/discover" exact>
      <Discoverpage />
      </Route>
      <Route path="/join" exact>
      <Formpage />
      </Route>
      </Switch>
      </AnimatePresence>
      
    </div>
  );
}

export default App;
