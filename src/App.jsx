import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
