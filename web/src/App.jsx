import { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import "./App.css";

function App() {
  
  return (
    <>
      {/* {positionArr.map((position) => (
        <div key={position.id}>
          <label htmlFor="">
            <strong>POSITION: </strong>
            Lat:
            {position.vehicle.position.latitude}
          </label>
          <label htmlFor=""> Lon: {position.vehicle.position.longitude}</label>
          <label
            style={
              position.vehicle.current_status === "IN_TRANSIT_TO"
                ? { color: "green" }
                : { color: "red" }
            }
          >
            {" "}
            <strong>STATUS:</strong>{" "}
            {position.vehicle.current_status === "IN_TRANSIT_TO"
              ? "En route"
              : "Boarding"}
          </label>
        </div>
      ))} */}
      <Map />
      {/* <label htmlFor="">Longitude: {positionArr[trainIndex]?.vehicle?.position?.longitude} Latitude: {positionArr[trainIndex]?.vehicle?.position?.latitude}</label> */}
    </>
  );
}

{
  /* {stopData.map((stop) => (
  <div key={stop.id}>
    <h2>
      {stop.type === 0 ? "🚋" : "🚌"} {stop.name}
    </h2>
    coordinates: {stop.lat}, {stop.lon}
  </div>
))}
{stopData.length} */
}
export default App;
