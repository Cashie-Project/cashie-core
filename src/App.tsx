import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PAGE_BLOG, PAGE_FAQ, PAGE_HOME, PAGE_PRIVACY_POLICY } from './utils/constants/page.constants';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PAGE_HOME}>
          <Home />
        </Route>
        <Route path={PAGE_PRIVACY_POLICY}>
          <PrivacyPolicy />
        </Route>
        <Route path={PAGE_BLOG}>
          <Blog />
        </Route>
        <Route path={PAGE_FAQ}>
          <FAQ />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
