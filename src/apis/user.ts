export async function getData() {
  const response = await fetch("src/data.json");
  const data = await response.json();
  return data;
}

export async function loginApi(username: string, password: string) {
  const response = await fetch("src/login.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (username === "admin" && password === "admin") {
    return { success: true };
  }
  const data = await response.json();
  console.log("data", data);
  return data;
}

export const fetchImages = async (query: string) => {
  const response = await fetch(
    `https://api.apiopen.top/api/getImages?query=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
