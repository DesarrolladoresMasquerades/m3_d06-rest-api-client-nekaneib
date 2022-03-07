import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AddProject from "../components/AddProject"
import ProjectCard from "../components/ProjectCard"

export default function ProjectsListPage() {
    const [projects, setProjects] = useState([])
    const API_URL = "http://localhost:5005";

    const getAllProjects = ()=> {
        axios.get(`${API_URL}/api/projects`)
        .then(response => setProjects(response.data))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        getAllProjects()
    }, [])

    return (
      <div className="ProjectListPage">

        <AddProject refreshProjects={getAllProjects} />

        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    );
}
