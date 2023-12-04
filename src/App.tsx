import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";

import Home from "./pages/home";
import Main from "./pages/main";
import { ArticlePost } from "./components/articles";
import About from "./pages/about";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />}>
          <Route path="/post/:postId" element={<ArticlePost />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Main />} />

        <Route path="*" element={<Main />} />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
