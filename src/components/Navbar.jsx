import React from "react";
import NavbarUrls from "./NavbarUrls";

const Navbar = (props) => {
  return (
    <div className="row nav-height">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="true"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
   
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a className=" text-dark text-decoration-none" >
                  <NavbarUrls theme={props.theme} />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className=" d-flex flex-row justify-content-end mt-2 align-items-center  px-2 ">
        <div>
        <NavbarUrls />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
