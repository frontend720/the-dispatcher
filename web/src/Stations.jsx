import React from "react";
import "./Stations.css";
import stations from "../textfiles/stations.json";

export default function Stations() {
  return (
    <div className="menu">
      {stations.map((station) => (
        <div>
          <label htmlFor="">{station.name}</label>
        </div>
      ))}
    </div>
  );
}
