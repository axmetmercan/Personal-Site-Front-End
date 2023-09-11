import React,{useState, useEffect} from "react";
import ProjectCategories from "./ProjectCategories";
import ProjectCard from "./ProjectCard";
import axios from "axios";

export default function ContainerCard(props) {

  const [projects, setProjects] = useState([])

  useEffect(()=>{
    getProjects()
  },[])


  const getProjects = async()=>{
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const res = await axios.get(apiUrl+"projects/")
    setProjects(res.data)


  }

  const projectsCard = projects?.map((item)=>{
    return <ProjectCard key={item.id} project={item}></ProjectCard>
  });
  

  return (
    <div className=" border-3  p-3 border-light rounded-3">
      <div className="d-flex flex-row  flex-wrap m-2 justify-content-center ">
        <div className=" project-categorie-side d-none d-sm-block ">
          <ProjectCategories></ProjectCategories>
        </div>
        <div className="row container-fluid ">
          <div className="d-flex flex-column wrap justify-content-center align-items-center project-content-side  ">
            {projectsCard}
          </div>
        </div>
      </div>
    </div>
  );
}
