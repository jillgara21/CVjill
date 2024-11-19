import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skill from "./components/Skill";
import Portfolio from "./components/Portofolio";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <About />
        <Qualification />
        <Contact />
        <Footer />
        <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
        <a href="#" className="btn btn-outline-dark px-0 back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
      </div>
    </div>
  );
};

export default App;
