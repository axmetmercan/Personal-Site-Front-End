import React, { useEffect, useState } from "react";
import animationData from "../assets/animation_lm13n7hi.json";
import Lottie from "lottie-react";
import axios from "axios";

export default function Firstimpression() {

  const [about, setAbout] = useState([]);

  useEffect( ()=>{
    getAbout()
  
  }, [])


  const getAbout = async ()=>{
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const res = await axios.get(String(apiUrl)+"profile/")
    setAbout(res.data);
}

  return (
    <div id="home" className="row  half-height  border-primary  ">
      <div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
        {/* <Lottie
          className="slide-in-blurred-top shadow"
          style={{ width: "450px" }}
          animationData={animationData}
        ></Lottie> */}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-flicker-in-glow display-2 text">{about[0]?.name + " " + about[0]?.surname} </p>
          <p className=" text-focus-in fs-4  text "> {about[0]?.title} </p>
        </div>
      </div>
    </div>
  );
}
