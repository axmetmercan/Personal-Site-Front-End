import React, { useEffect, useState } from "react";
import SkillBar from "react-skillbars";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

export default function Aboutme() {
  const [abilities, setAbilities] = useState([]);
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    getAbilities();
    getAboutMe();
  }, []);

 
  const skills = []

  const skills_func = abilities.map((item)=>{
    const ob = {
      type: item.title,
      level: item.degree,
      color: {
        bar: "#44B78B",
        title: { text: "#ffff", background: "#33725A" },
      },
    }

    skills.push(ob);
  })

  const getAbilities = async () => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const res = await axios.get(String(apiUrl) + "abilities/");
    setAbilities(res.data);
  };
  const getAboutMe = async () => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const res = await axios.get(String(apiUrl) + "profile/");
    // setAboutMe(res.data.);
    setAboutMe(res.data[0])
  };

  return (
    <div id="about" className="">
      <hr className="my-5"></hr>

      <p className="text text-center fs-2">About Me</p>
      <div className="row">
        <div className="d-flex flex-row justify-content-center  align-items-center d-block d-lg-none">
        <img className="img-fluid rounded-circle" src={aboutMe.picture} width="360"></img>
        </div>
        <div className="col-4 d-none d-lg-block profile-pic align-self-center p-5">
          <img className="img-fluid rounded-circle" src={aboutMe.picture} ></img>
        </div>
        <div className="col d-block">
          <ScrollAnimation animateIn="slide-in-right">
            <div className="d-flex flex-column mx-5 justify-content-center align-items-center about-me   p-5">
              <p className="text text-center fs-4">Hi There; </p>
              <p className="text fs-5">
                {aboutMe.description}
              </p>
            </div>
          </ScrollAnimation>
          <div className="d-flex flex-column  justify-content-center align-items-center my-abilities  p-5">
            <p className="text text-center fs-4">Check My Staff!</p>
            <div className="" style={{ width: "80%" }}>
              <p className="fs-5">Here is My Skillset</p>
              <SkillBar
                skills={skills}
                height={20}
                animationDelay={750}
              />
              {/* <p className="fs-5">
                Frameworks - Databeses - Containerization - Cloud
              </p>
              <SkillBar skills={frameworks} height={20} animationDelay={750} /> */}

              {}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
