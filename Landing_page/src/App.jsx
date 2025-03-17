
import { Route,Routes } from 'react-router-dom'
import './index.css'


import HomePage from './pages/Homepage'
import AllReviewsPage from './componenets/AllReviewsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/all-reviews" element={<AllReviewsPage/>} />

      </Routes>
    </>
  )
}

export default App
