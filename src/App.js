import Header from "./components/header/index-header.js";
import Hero from "./components/hero/hero-index";
import Business from "./components/hero/busines";
import Main from "./components/main/index";
import Footer from "./components/footer/footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Business />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
