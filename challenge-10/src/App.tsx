import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import OurStory from "./pages/OurStory"
import Details from "./pages/Details"
import RSVP from "./pages/RSVP"
import MainLayout from "./layouts/MainLayout"
import LoadingIndicator from "./shared/LoadingIndicator"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/details" element={<Details />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </MainLayout>
      <LoadingIndicator />
    </Router>
  )
}
