import Counter from "./components/counter/Counter.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Form from "./components/form/form.jsx";
import Home from "./pages/home/Home.jsx";
import Aboutus from "./pages/aboutus/Aboutus.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Routes , Route } from "react-router-dom";
import Products from "./pages/products/Products.jsx";
import InquiryList from "./pages/inquiryList/InquiryList.jsx";





function App() {
  return(
    <div>
      <Header />

       <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/products" element={ <Products />} />
            <Route path="/inquiries" element={<InquiryList />} />
            <Route path="*" element={<Home />} />
            
          </Routes>
        </main>

      <Footer />
    </div>
  )
}

export default App;
