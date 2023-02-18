import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
