// import { initializeApp } from "firebase/app";
// import { getDatabase, onValue, ref } from "firebase/database";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
// import { firebaseConfig } from "../config/firebase";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const Home = () => {
  const context = useDataContext();
  console.log(context.proximity);
  return (
  <>
      <div className=" d-flex justify-content-center ">
        {" "}
        <h2 className="fw-bold text-center mb-5 w-50 lh-base">
          Bienvenidos a IOTERRA
        </h2>
      </div>
      <NavLink to="/variables" className="text-black">
        <div className="d-flex vw-100 justify-content-center flex-column align-items-center gap-4">
          <img
            className="img-planta"
            src="https://cdn-icons-png.flaticon.com/512/3986/3986428.png"
            alt=""
          />
          <h5 className="text-center ">
            Selecciona la planta para obtener la información de tu planta
          </h5>
        </div>
      </NavLink>
    
  </>
  );
};

export default Home;
