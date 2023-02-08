const URLs = "http://localhost:7979/images/";
// const URLs = "https://cayambe-tourism.onrender.com/images/";

export const getData = async () => {
  try {
    const req = await fetch(URLs + "sitios");
    const resp = await req.json();
    const response = await resp;
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
