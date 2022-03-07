import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ProjectsListPage from "./pages/ProjectsListPage"
import ProjectsDetailsPage from "./pages/ProjectDetailsPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/projects" element={<ProjectsListPage />} />
        <Route exact path="/projects/:projectId" element={<ProjectsDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
