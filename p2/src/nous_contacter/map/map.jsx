import React from "react";
import { useEffect } from "react";
import '../map/map.css';

const MapComposant = () => {
    useEffect(() => {
        // Load the map after the component is mounted
        const initMap = () => {
          const melbourne = { lat: -37.8136, lng: 144.9631 };
          const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: melbourne,
          });
    
          new window.google.maps.Marker({
            position: melbourne,
            map: map,
          });
        };
    
        // Make sure Google Maps API is available
        if (!window.google) {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Replace with your actual API key
          script.async = true;
          script.defer = true;
          script.onload = initMap;
          document.body.appendChild(script);
        } else {
          initMap();
        }
      }, []);

    return(
        <div className="map-container" id="map">
            {/* Google Map will render here */}
        </div>
    );
}

export default MapComposant;