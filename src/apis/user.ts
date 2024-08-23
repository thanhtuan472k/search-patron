import { appConfig } from '../AppConfig'

export async function getData() {
  const response = await fetch('src/data.json')
  const data = await response.json()
  return data
}

export async function loginApi(email: string, password: string) {
  const apiUrl = `${appConfig.igt_api_base_url}/auth`;
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Login failed with status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export const fetchImages = async (query: string) => {
  const response = await fetch(`https://api.apiopen.top/api/getImages?query=${query}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
}
