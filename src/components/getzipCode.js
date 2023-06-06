import axios from 'axios';

export async function getZipCode(latitude, longitude) {
  const apiKey = 'AIzaSyDv0LW8rdzKeKPjPWedHX5RJXV7rz1Ikic'; // Replace with your own API key

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
    );

    const { results } = response.data;
    if (results && results.length > 0) {
      const zipCodeResult = results.find((result) =>
        result.types.includes('postal_code')
      );
      if (zipCodeResult) {
        return zipCodeResult.address_components[0].long_name;
      }
    }
  } catch (error) {
    console.error('Error retrieving ZIP code:', error);
  }

  return null;
}
