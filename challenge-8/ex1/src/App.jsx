import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import NoPage from "./components/NoPage";
import Counter from "./components/Counter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Counter initvalue={0}/>} />
          <Route path="login" element={<LoginForm />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}