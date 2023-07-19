import React, { useEffect } from "react";


const Demo = () => {
  let IMG_URL = "https://www.nseindia.com/api/market-data-pre-open?key=FO";
  const fetchData = async (IMG_URL) => {
    const res = await fetch(IMG_URL,{
      method: 'GET',
      credentials: 'same-origin'
   });
    const json = await res.json();
    if (res.ok) {
      console.log("ok");
    } else {
      console.log("not ok");
    }
  };

  useEffect(() => {
    fetchData(IMG_URL);
  }, []);
  return (
    <>
      <h1>Fetching the data</h1>
    </>
  );
};

export default Demo;
