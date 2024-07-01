# ipapi-tools

[![npm version](https://badge.fury.io/js/ipapi-tools.svg)](https://badge.fury.io/js/ipapi-tools)
[![NPM downloads](https://img.shields.io/npm/dm/ipapi-tools.svg)](https://www.npmjs.com/package/ipapi-tools)

`ipapi-tools` is a simple Node.js package that fetches location information based on the client's IP address using the [ip-api](http://ip-api.com) service.

## Features

- Fetch location data using the client's IP address
- Easy-to-use API
- Lightweight and fast

## Installation

You can install `ipapi-tools` using npm:

```sh
npm install ipapi-tools
```

## Usage

Here's how you can use `ipapi-tools` in your project:

```javascript
const { getLocationByIp } = require('ipapi-tools');

// Example usage in an Express route
app.get('/api/location', async (req, res) => {
  const clientIp = req.ip;

  try {
    const locationData = await getLocationByIp(clientIp);
    res.status(200).json(locationData);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching location data');
  }
});
```

## API

### `getLocationByIp(ip: string): Promise<LocationData>`

Fetches location data based on the provided IP address.

#### Parameters

- `ip`: The IP address to fetch the location data for.

#### Returns

A promise that resolves to an object containing the location data.

```typescript
interface LocationData {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}
```

Example response:

```json
{
  "query": "24.48.0.1",
  "status": "success",
  "country": "Canada",
  "countryCode": "CA",
  "region": "QC",
  "regionName": "Quebec",
  "city": "Montreal",
  "zip": "H1K",
  "lat": 45.6085,
  "lon": -73.5493,
  "timezone": "America/Toronto",
  "isp": "Le Groupe Videotron Ltee",
  "org": "Videotron Ltee",
  "as": "AS5769 Videotron Ltee"
}
```

## TypeScript

If you are using TypeScript, `ipapi-tools` includes a type definition file. You can import and use the types as follows:

```typescript
import { getLocationByIp, LocationData } from 'ipapi-tools';

const clientIp = '8.8.8.8';

getLocationByIp(clientIp)
  .then((locationData: LocationData) => {
    console.log(locationData);
  })
  .catch((error) => {
    console.error(error);
  });
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## Acknowledgements

- [ip-api](http://ip-api.com) for providing the IP geolocation service.

## Author

- [Alexin](https://github.com/alexindevs)
