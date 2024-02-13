import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
      <>
          <Header />
          <BrowserRouter>
              <Routes>
                  <Route path="accueil" element={<Home />} />
              </Routes>
          </BrowserRouter>
          <Footer />
      </>
  )
}

export default App
