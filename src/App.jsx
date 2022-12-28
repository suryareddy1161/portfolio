import Show from './Pages/Show/Show'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './Pages/Moviedetail/Movie';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />}></Route>
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
