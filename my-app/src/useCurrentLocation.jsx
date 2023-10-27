import { useState } from "react";

export default function useCurrentLocation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  function getLocation() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation(latitude + " " + longitude);
      setLoading(true);
    }
    function error(err) {
      setError(err);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
  return {
    getLocation: getLocation,
    location: location,
    error: error,
    loading: loading,
  };
}
