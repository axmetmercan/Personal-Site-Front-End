import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Firstimpression from "./components/Firstimpression";
import ContactComponent from "./components/ContactComponent";
import { PacmanLoader } from "react-spinners";
import DefaultPage from "./pages/DefaultPage";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Cookies from "js-cookie";
import WorkExperiences from "./pages/WorkExperiences";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [toggleBackground, setToggleBackground] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const theme = Cookies.get("theme");
      setDarkMode(theme == 1 ? true : false);
      if (theme == null) {
        setDarkMode(false);
      }
    } catch (error) {
      setDarkMode(false);
      Cookies.set("theme", 1);
    }
    setLoading(false);
  }, []);

  const swithcMode = (e) => {
    Cookies.set("theme", darkMode == true ? 0 : 1);
    setDarkMode(!darkMode);
    setToggleBackground(!toggleBackground);
    e.clas;
  };

  return (
    <div className={`pb-5 ${darkMode ? "dark-mode" : ""}`}>
      {isLoading ? (
        <div className="max-height max-weight d-flex justify-content-center align-items-center">
          <PacmanLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="container container-fluid">
          {/*Navbar      */}

          <div className="d-flex flex-row pt-2 justify-content-between align-items-center">
            <Navbar theme={darkMode}></Navbar>
            <div className=" form-check form-switch ms-3">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {darkMode ? (
                  <i className="ri-sun-line bg-light border rounded-circle sun-size"></i>
                ) : (
                  <i className="ri-sun-fill  sun-size"></i>
                )}
              </label>
              <input
                className={` form-check-input ${
                  toggleBackground ? "bg-dark" : ""
                }`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={swithcMode}
              />
            </div>
          </div>
          <hr></hr>

          {/* Pages and routing will be added to this page */}

          {/* Welcome Page */}
          <Firstimpression></Firstimpression>
          <ContactComponent theme={darkMode}></ContactComponent>

          {/* About Me Page */}

          <Aboutme></Aboutme>

          {/* Work Experinces */}
          <WorkExperiences></WorkExperiences>

          {/* My Projects Page */}
          <DefaultPage></DefaultPage>

          {/*Contact  */}
          <Contact theme={darkMode}></Contact>
          {/*Footer  */}
        </div>
      )}
    </div>
  );
}

export default App;
