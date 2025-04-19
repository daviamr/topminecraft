export async function getCountryFromIP() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    console.log(data)

    return {
      countryCode: data.country || "US",
      countryName: data.countryName || "United States"
    }
  } catch (error) {
    console.log('Erro ao buscar a localização: ', error);

    return {
      countryCode: 'US',
      countryName: 'United States',
    }
  }
}