import axios from "axios";
import AddTask from "../components/AddTask.jsx";
import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../components/TaskCard";


export default function ProjectDetailsPage(props) {
    const API_URL = "http://localhost:5005";
    const [project, setProject] = useState(null);
    const { projectId } = useParams();

  function getProject(){
    axios.get(`${API_URL}/api/projects/${projectId}`)
    .then(response => setProject(response.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">

      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => <TaskCard key={task._id} task={task} />)}
    </div>
  );
}
