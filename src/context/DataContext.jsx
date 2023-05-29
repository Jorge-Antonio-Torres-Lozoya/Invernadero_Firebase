
/* eslint-disable react/prop-types */
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { createContext, useState, useContext, useEffect } from 'react'
import { firebaseConfig } from "../config/firebase";
// 1 Creacion del contexto vacio
const DataContext = createContext()

// 2 Creacion del componente Proveedor del contexto
function DataProvider (props) {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
  // const [humidity, setHumidity] = useState([] || {}) // Lista de data
  // const [temperature, setTemperature] = useState([] || {}) // Lista de data
  const [ldr, setLDR] = useState([] || {}) // Lista de data
  const [proximity, setProximity] = useState([] || {}) // Lista de data
  const [tierra, setTierra] = useState([] || {}) 
  


const Getdata = () => {
    // const databaseRef = ref(database, "DHT11/Humidity");
    // const temperatureRef = ref(database, "DHT11/Temperature");
    const ldrRef = ref(database, "LDR/valor");
    const proximityRef = ref(database, "Proximity/");
    const humedadTierraRef = ref(database, "HumedadTierra/");

    // onValue(databaseRef, (snapshot) => {
    //   const values = Object.values(snapshot.val());
    //   const ultimoValor=values.slice(-1)[0]
    //   setHumidity(JSON.stringify(ultimoValor)); // Obtener el último valor del array
    //   if (humidity === null) {
    //     console.log("No hay datos");
    //   } else {
    //     console.log(humidity);
    //   }
    // });
    // onValue(temperatureRef, (temperatureSnapshot) => {
    //     const temperatureValues = Object.values(temperatureSnapshot.val());
    //     const ultimoTemperature = temperatureValues.slice(-1)[0];
    //     setTemperature(JSON.stringify(ultimoTemperature));
    
    //     if (temperature === null) {
    //       console.log("No hay datos de temperatura");
    //     } else {
    //       console.log(temperature);
    //     }
    //   });
      onValue(ldrRef, (ldrSnapshot) => {
        const ldrValues = Object.values(ldrSnapshot.val());
        const ultimoLDR = ldrValues.slice(-1)[0];
        setLDR(JSON.stringify(ultimoLDR));
    
        if (ldr === null) {
          console.log("No hay datos de LDR/valor");
        } else {
          console.log(ldr);
        }
      });

      onValue(proximityRef, (proximitySnapshot) => {
        const proximityValue = Object.values(proximitySnapshot.val());
        const ultimoProximity = proximityValue.slice(-1)[0];
        setProximity(JSON.stringify(ultimoProximity));
    
        if (proximity === null) {
          console.log("No hay datos de Proximity");
        } else {
          console.log(proximity);
        }
      });

      onValue(humedadTierraRef, (humedadTierraSnapshot) => {
        const tierraValue = humedadTierraSnapshot.val();
        setTierra(JSON.stringify(tierraValue ));
    
        if (tierra === null) {
          console.log("No hay datos de Proximity");
        } else {
          console.log(tierra);
        }
      });


  };

  useEffect(() => {
    Getdata();
  }, []);

  const value = {
    // humidity,
    // temperature,
    ldr,
    proximity,
    tierra
 
  }

  return (
    // Siempre se llama value el prop de Provider con la data
    // value es un objeto que indica que datos SON GLOBALES
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}

// 3 Consumidor del contexto
// Brinda accesso a la data de los componentes

const useDataContext = () => {
  const context = useContext(DataContext)
  return context
}

// 4 exportar las funciones del Provider y el Consumer
// para que puedan ser invocados en nuestro componentes
export {
  DataProvider,
  useDataContext
}

// 5 Uso de Context
// Nos vamos a ir  a nuestro componente superior (por ejemplo Home)
// envolver a los componentes que necesitan la informacion del contexto