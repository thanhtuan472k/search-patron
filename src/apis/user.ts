export async function loginApi() {
    const response = await fetch('src/history.json');
    const data = await response.json();
    return data;
}

export async function getData() {
    const response = await fetch('src/data.json');
    const data = await response.json();
    return data;
}

export const fetchImages = async (query: string) => {
    const response = await fetch(`https://api.apiopen.top/api/getImages?query=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };