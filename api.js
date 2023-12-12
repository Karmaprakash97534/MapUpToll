// utils/api.js
const TOLLGURU_API_KEY = 'YOUR_TOLLGURU_API_KEY';

// Function to fetch toll data from TollGuru API
export const fetchTollData = async (start, end) => {
  try {
    const response = await fetch(`https://api.tollguru.com/v1/calculation?from=${start}&to=${end}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': TOLLGURU_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('TollGuru API request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching toll data:', error);
    throw error;
  }
};
