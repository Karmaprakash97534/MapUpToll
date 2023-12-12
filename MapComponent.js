// components/MapComponent.js
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { decode } from '@googlemaps/polyline-codec';

const MapComponent = ({ routePolyline, tollDetails }) => {
  const [decodedRoute, setDecodedRoute] = useState([]);

  useEffect(() => {
    if (routePolyline) {
      const decoded = decode(routePolyline);
      setDecodedRoute(decoded);
    }
  }, [routePolyline]);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {decodedRoute.length > 0 && (
        <Polyline positions={decodedRoute} color="blue" />
      )}

      {decodedRoute.map((point, index) => {
        const tollInfo = tollDetails[index]; // Assuming tollDetails is an array of toll information

        return (
          <Marker key={index} position={[point.lat, point.lng]}>
            <Popup>
              <div>
                <h3>Toll Information</h3>
                <p>Cost: {tollInfo.cost}</p>
                <p>Additional Details: {tollInfo.additionalDetails}</p>
                {/* Add more relevant details as needed */}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
export default MapComponent;
