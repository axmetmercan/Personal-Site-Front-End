import React, {useEffect, useState} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import WorkExperincesCard from "../components/WorkExperincesCard";
import axios from "axios";

export default function WorkExperiences() {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    getWorkExperiences()
  }, []);
  

  const getWorkExperiences = async () =>{
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const res = await axios.get(apiUrl+"experiences/")
      setExperiences(res.data)
  }


  const Experiences = experiences.map((item) => {
    return  <WorkExperincesCard key={item.id} experience={item} ></WorkExperincesCard>

  });

  return (
    <div>
        <div className="contaier-fluid  ">
            <p className="fs-3 my-3 text text-center">Work Experiences</p>
            <div className="d-flex flex-row justify-content-center align-items-center flex-wrap py-5">
                {Experiences}
            </div>
        </div>

      <hr></hr>
    </div>
  );
}
