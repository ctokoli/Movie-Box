import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DetailsPage from './components/DetailsPage'
import HomePage from './components/homepage';


function Index() {
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

export default Index
