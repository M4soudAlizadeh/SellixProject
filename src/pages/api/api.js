const Handler = async (req, res) => {
  if (res.method === "GET") {
    const response = await fetch(res.url);
    const data = response.json();
    return data;
  }
  return data;
};
export default Handler;
