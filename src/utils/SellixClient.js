const api = "https://jsonplaceholder.typicode.com/";
const SellixClient = (req = "GET", key, bod = null) => {
  const get = async (set) => {
    const getRes = await fetch(api + key, {
      Method: req,
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: bod === null ? null : bod,
    });
    const getData = await getRes.json();
    set(getData);
  };
  return { get };
};
export default SellixClient;
