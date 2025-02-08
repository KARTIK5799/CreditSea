import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Home from "./components/Home";
import Records from "./components/Records";
import Header from "./components/Header";

function App() {
  return (
    <Router>
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
        </Routes>
   
    </Router>
  );
}

export default App;