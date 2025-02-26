import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectPage from './Pages/Project/Project';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/job-cases/" element={<Home />} />
        <Route path="/job-cases/Project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
