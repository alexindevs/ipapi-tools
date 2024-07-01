import axios from 'axios';

export async function getIpLocation(ip: string) {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP location:', error);
    throw error;
  }
}
