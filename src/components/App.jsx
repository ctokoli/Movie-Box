import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App'
import DetailsPage from './DetailsPage'
import HomePage from './homepage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movie" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
