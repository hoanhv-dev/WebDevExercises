import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Todo from './pages/Todo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/todo' element={<Todo />}/>
      </Routes>
    </Router>
  )
}

export default App
