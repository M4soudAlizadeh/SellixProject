const api = "https://jsonplaceholder.typicode.com/";
const SellixClient = (req = "GET", key) => {
  const get = async (set) => {
    const getRes = await fetch(api + key, {
      Method: req,
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const getData = await getRes.json();
    set(getData);
  };

  // const send = (a, b) => {
  //   return a - b / d;
  // };

  return { get };
};
export default SellixClient;
