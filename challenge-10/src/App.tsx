import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import OurStory from "./pages/OurStory"
import Details from "./pages/Details"
import MainLayout from "./layouts/MainLayout"
function App() {


  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
