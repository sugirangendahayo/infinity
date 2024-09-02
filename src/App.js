import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Services from "./Services";
import Team from "./Team";
import Home from "./Home";
import Footer from "./Footer";
import Blog from './Blog';
import BlogDetails from "./BlogDetails";



function App() {
  return (
    <div className="App font-Quicksand">
      <header>
      <Navbar />
      </header>
     
      <main className="">
    <Routes>
      <Route exact path="/"  element={<Home />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/blogs/:id" element={<BlogDetails />}></Route>
    </Routes>
       
    </main>
      <Footer />
    </div>
  );
}

export default App;
