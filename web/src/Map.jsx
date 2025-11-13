import React, { useEffect, useRef, useContext, useState } from "react";
import mapboxgl from "mapbox-gl";
import { RTDContext } from "./context/rtdContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";
import Stations from "./Stations";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

export default function Map() {
  const { longitude, latitude } = useContext(RTDContext);
  const [coords, setCoords] = useState({})

//   useEffect(() => {

//       let center = {
//         lat: latitude,
//         lng: longitude,
//       };
//     //   return () => center
//     setCoords(center)
//   }, [latitude, longitude])

//   console.log(latitude, longitude)

//   const containerStyle = {
//     width: "100vw",
//     height: "100vh",
//   };

//   console.log(coords)


// const { isLoaded } = useJsApiLoader({
//   id: "google-map-script",
//   googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
// });

// const [map, setMap] = React.useState(null);

// const onLoad = React.useCallback(function callback() {
//   const bounds = new window.google.maps.LatLngBounds(coords);
//   map.fitBounds(bounds);
//   setMap(map);
// }, []);

// const onUnmount = React.useCallback(function callback(map) {
//   setMap(null);
// }, []);

  console.log(longitude, latitude);
  let mapRef = useRef(null);

  const markerRef = useRef(null);

  useEffect(() => {
    if (longitude && latitude !== undefined) {
      let map = new mapboxgl.Map({
        container: mapRef.current,
        center: [longitude, latitude], //[lng, lat],
        zoom: 17.8,
      });
      new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
      return () => map.remove();
    }
  }, [longitude, latitude]);

    return (
      <div ref={mapRef} id="map" style={{ width: "100vw" }}>
        <div style={{ position: "absolute", color: "blue" }} ref={mapRef.current}>
          <div
            className="menu-container"
            style={{ padding: "5px 10px", background: "white", margin: "6px", borderRadius: 5 }}
          >
            <GiHamburgerMenu size="24px" color="#44444475" />
            {/* <Stations /> */}
          </div>
        </div>
      </div>
    );

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     ></GoogleMap>
//   ) : (
//     <></>
//   );
}
