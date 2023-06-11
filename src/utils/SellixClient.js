const BASE_URL = "https://jsonplaceholder.typicode.com/";
const SellixClient = (method = "GET", url, body = null) => {
  const get = async (set) => {
    const getRes = await fetch(BASE_URL + url, {
      Method: method,
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + "wrfwqlrflp42423",
        hello: "wkqerokqwro",
      },
      body: body === null ? null : body,
    });
    const getData = await getRes.json();
    set(getData);
  };
  return { get };
};
export default SellixClient;
