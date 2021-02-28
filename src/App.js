import Home from "./Home";
import About from "./About";
import Oppointment from  "./Oppointment";
import Signin from "./Signin";
import Footer from "./Footer";
import "./styles.css";
import {Bootstrap, Grid,Row, Col} from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
    <Home />
    <About/>
    <Oppointment />
    <Signin />
    <Footer />
    </div>
  );
}
