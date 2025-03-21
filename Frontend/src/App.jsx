
import { Route,Routes } from 'react-router-dom'
import './index.css'


import HomePage from './pages/Homepage'
import AllReviewsPage from './componenets/AllReviewsPage'
import NAllReviewsPage from './componenets/NewAllReviews'
import UploadForm from './componenets/UploadForm'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/all-reviews" element={<AllReviewsPage/>} />
        <Route path="/newa" element={<NAllReviewsPage/>} />
        <Route path="/form" element={<UploadForm/>} />

      </Routes>
    </>
  )
}

export default App
