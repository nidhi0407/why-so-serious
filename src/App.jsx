import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComedianDetail from './pages/ComedianDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comedian/:id" element={<ComedianDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App