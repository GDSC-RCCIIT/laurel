import React from 'react';

const logolaurelsmall = {
  position: "absolute",
  width: "80px",
  height: "103px",
  left: "0px",
  top: " 0px",
  background: "url(.jpg)"
};



const nb = {
  padding: "30px 0px 0px 80px"
}

const Laurel = {
  position: "absolute",
  width: "77px",
  height: " 29px",
  left: "76px",
  top: " 40px",
  fontFamily: " Roboto Slab",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: " 32px",
  color: "#000000",
}

const home = {
  position: " absolute",
  width: " 434px",
  height: "35px",
  left: "192px",
  top: "40px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: " normal",
  fontSize: "24px",
  lineHeight: " 28px",
  color: "#000000",
};

const privatepolicy = {
  position: " absolute",
  width: " 434px",
  height: "35px",
  left: "270px",
  top: "40px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: " normal",
  fontSize: "24px",
  lineHeight: " 28px",
  color: "#000000",
};

const gdscrcciit = {
  position: " absolute",
  width: " 434px",
  height: "35px",
  left: "430px",
  top: "40px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: " normal",
  fontSize: "24px",
  lineHeight: " 28px",
  color: "#000000",
}


export default function Header() {
  return (
    <nav style={nb} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <div>
          <img style={logolaurelsmall} src="/images/istockphoto-1279136583-612x612 1.jpg" alt="" />
        </div>

        <a style={Laurel} className="navbar-brand" >Laurel</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a style={home} className="nav-link active" aria-current="page" href="#">Home  |</a>
            </li>

            <li className="nav-item">
              <a style={privatepolicy} className="nav-link active" href="#">Privacy Policy |</a>
            </li>

            <li className="nav-item">
              <a style={gdscrcciit} className="nav-link active " href="#">  GDSC RCCIIT </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
              











