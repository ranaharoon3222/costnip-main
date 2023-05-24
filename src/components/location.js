import { useEffect, useState } from 'react';

export function Location() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [location, setLocation] = useState(null);
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
  // useEffect(() => {
  //   if (latitude && longitude) {
  //     fetch(
  //       `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=7ecaf79888914cd98f49377479cadda7`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLocation(data.results[0].formatted);
  //       })
  //       .catch((error) => setError(error.message));
  //   }
  // }, [latitude, longitude]);
  return {
    latitude,
    longitude
  };
}
