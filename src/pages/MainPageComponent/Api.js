import { useState, useEffect } from "react";
const Api = async (order = "GET") => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
          {
            method: order,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  //   console.log(data.title);
};
export default Api;
