import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Pricing from "./components/Pricing.jsx";
import Support from "./components/Support.jsx";
import Products from "./components/Products.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


export default function App(){

  return(

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Products />} />

        <Route path="*"  element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
