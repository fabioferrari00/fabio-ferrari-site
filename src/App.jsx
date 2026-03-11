import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Contacts from "./pages/Contacts.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-me" element={<AboutMe />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
