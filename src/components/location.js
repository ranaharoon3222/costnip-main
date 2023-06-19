import { useEffect, useState } from 'react';

export function Location() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => setError(error.message)
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);
  return {
    latitude,
    longitude
  };
}
