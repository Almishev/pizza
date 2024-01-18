
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Pizza";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Desserts from "./pages/Desserts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
        <Route index compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/home' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/menu' compoent={Menu} exact>
            <Menu />
          </Route>
          <Route path='/desserts' compoent={Desserts} exact>
            <Desserts />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
    
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
