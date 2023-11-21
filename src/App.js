import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./App.css";
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Remplacez ces coordonnées par le centre souhaité au milieu de votre page
const center = {
  lat: 14.697004949544116,
  lng: -17.456834126243503,
};

const markerCoords = {
  lat: 14.69691159978684,
  lng: -17.456930279759323,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCS5K4bETZp6tyPmw-jRAIt1v4kwGojKvw",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="card">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={markerCoords} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
export default React.memo(MyComponent);
