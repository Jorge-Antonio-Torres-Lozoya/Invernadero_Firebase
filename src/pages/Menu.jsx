// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/menu.css";
import { useDataContext } from "../context/DataContext";


const Menu = () => {
  const context = useDataContext();
  // const [showContentTemperature, setShowContentTemperature] = useState(false);
  // const [showContentHumidity, setShowContentHumidity] = useState(false);
  const [showContentLuz, setShowContentLuz] = useState(false);
  const [showContentTierra, setShowContentTierra] = useState(false);
  const [showContentProximity, setShowContentProximity] = useState(false);

  // const handleClickTemperature = () => {
  //   setShowContentTemperature(!showContentTemperature);
  //   console.log(showContentTemperature);
  //   console.log(context.temperature)
  // };

  // const handleClickHumidity = () => {
  //   setShowContentHumidity(!showContentHumidity);
  //   console.log(showContentHumidity);
  // };
  const handleClickLuz = () => {
    setShowContentLuz(!showContentLuz);
  };
  const handleClickTierra = () => {
    setShowContentTierra(!showContentTierra);
    // console.log(context.tierra);
  };
  const handleClickProximity = () => {
    setShowContentProximity(!showContentProximity);
   
    // console.log( context.proximity.substring(1, 3))// Imprimirá "10"
  };


  // const handleLuzEncendida = () => {
  //   console.log("Encendiendo luz...");
  //   // Enviar el valor "1023" a la base de datos de Firebase
  //   const database = getDatabase();
  //   const luzRef = ref(database, "/LDR/valor"); // Ruta donde deseas almacenar el valor de la luz
  //   set(luzRef, "1023")
  //     .then(() => {
  //       console.log("Valor '1023' enviado correctamente a la base de datos.");
  //     })
  //     .catch((error) => {
  //       console.log("Error al enviar el valor a la base de datos:", error);
  //     });
  // };
  return (
    <div className="root-page-menu d-flex align-items-center">
      <div className="background-image"></div>{" "}
      {/* Elemento para la imagen de fondo */}
      <div className="d-flex vw-100 justify-content-center">
        <div className="container-menu w-75 d-flex flex-column gap-4">
        {/* {(showContentHumidity || showContentLuz || showContentTierra || showContentProximity) ? null : (
  <button className="w-100 button-blanco fw-bold fs-4" onClick={handleClickTemperature}>
    Temperatura
  </button>
)} */}
       {/* {(showContentTemperature || showContentLuz || showContentTierra || showContentProximity) ? null : (
          <button
            className="w-100 button-blanco fw-bold fs-4 fa-solid fa-droplet"
            onClick={handleClickHumidity}
          >
            Humedad ambiente
          </button>
          )} */}
          {( showContentTierra || showContentProximity) ? null : ( <button className="w-100 button-blanco fw-bold fs-4 text-black fa-solid fa-plus"    onClick={handleClickLuz}>
            Luz
          </button>)}

          {(  showContentLuz || showContentProximity) ? null : ( <button className="w-100 button-blanco fw-bold fs-4 text-black fa-solid fa-plus"    onClick={handleClickTierra}>
            Humedad tierra
          </button>)}
          
          {( showContentLuz || showContentTierra) ? null : ( <button className="w-100 button-blanco fw-bold fs-4 text-black fa-solid fa-plus"    onClick={handleClickProximity}>
           Nivel del tanque
          </button>)}
        

        {/* {
          showContentTemperature &&
          <>
          <h4 className="text-center mb-0">La temperatura ambiente es:</h4>
          <h3 className="text-center fw-bold">{context.temperature.replace(/"/g, "")}</h3>
          </>
        } */}
         {/* {
          showContentHumidity &&
          <>
          <h3 className="text-center mb-0">La humedad del ambiente es de:</h3>
          <h2 className="text-center fw-bold">{context.humidity.replace(/"/g, "")}</h2> 
          </>
        } */}
           {
          showContentLuz &&
          <>
          <div className="background-fondo">
          <h3 className="text-center fw-bold mb-0 py-2  text-white">{ context.ldr.replace(/"/g, "") === "0" ? "La luz está encendida" : "La luz está apagada"}</h3>
          </div>
         
          </>

        }
           {
          showContentTierra &&
          <>
          <div className="background-fondo">
          <h3 className="text-center fw-bold py-2 mb-0  text-white">{context.tierra == 1 ? "Le falta agua a tu planta, riégala" :"Tu planta tiene agua suficiente"}</h3>
          </div>
          </>
        }

{
          showContentProximity &&
          <>
           <div className="background-fondo">
          <h3 className="text-center fw-bold py-2 text-white mb-0">{context.proximity.substring(1, 3) > 6 ? "Falta de agua en el tanque, favor de llenar" :" Tanque con suficiente agua "}</h3>
          </div>
          </>
        }
        </div>
      </div>
    </div>
  );
};

export default Menu;

