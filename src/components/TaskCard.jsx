import { Link } from "react-router-dom";

export default function TaskCard(props){
    const {
        task : {_id, title, description}
    } = props

    return(
        <div className="ProjectCard card">
        <Link to={`/${_id}`}>
          <h3>{title}</h3>
        </Link>
        <p style={{ maxWidth: "400px" }}>{description} </p>

      </div>
    )
}