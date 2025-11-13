import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import stops from "../../textfiles/stops.txt"
import stations from "../../textfiles/stations.json"
import axios from "axios";

const RTDContext = React.createContext();

function RTDContextProvider({ children }) {
  const [stops, setStops] = useState("");
  const [positionArr, setPositionArr] = useState([]);

//   const stopData = stops
//     .split("\n")
//     .filter((line) => line.trim())
//     .map((line) => {
//       const fields = line.split(",");
//       return {
//         id: fields[0].replaceAll('"', ""),
//         name: fields[2].replaceAll('"', ""),
//         desc: fields[3].replaceAll('"', ""),
//         lat: parseFloat(fields[4].replaceAll('"', "")),
//         lon: parseFloat(fields[5].replaceAll('"', "")),
//         type: parseFloat(fields[8].replaceAll('"', "")),
//       };
//     });

  async function getPosition() {
    const positions = await axios({
      method: "GET",
      url: import.meta.env.VITE_RTD_URL,
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    try {
      const response = positions.data;
      return setPositionArr(response.entity);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(stations)

  useEffect(() => {
    getPosition();
    const intervalId = setInterval(() => {
    //   getPosition();
    },15000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetch("../../textfiles/stops.txt")
      .then((response) => response.text())
      .then((data) => setStops(data))
      .catch((error) => console.log(error));
  }, []);

  const trainIndex = Math.floor(Math.random() * positionArr.length);
  const station_id = positionArr[trainIndex]?.vehicle.stop_id;
  const longitude = positionArr[trainIndex]?.vehicle?.position?.longitude
  const latitude = positionArr[trainIndex]?.vehicle?.position?.latitude

  console.log(positionArr)

  return (
    <RTDContext.Provider value={{ positionArr, trainIndex, longitude, latitude }}>
      {children}
    </RTDContext.Provider>
  );
}

export { RTDContextProvider, RTDContext };
