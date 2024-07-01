import axios from 'axios';

/**
 * Retrieves the location information for a given IP address.
 *
 * @param {string} ip - The IP address to fetch location information for.
 * @return {Promise<any>} - A promise that resolves to the location information.
 * @throws {Error} - If there is an error fetching the location information.
 */
export async function getIpLocation(ip: string) {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP location:', error);
    throw error;
  }
}
