import { useState, useEffect } from "react";
const UseFetch = (url) => {
  const [card, setCard] = useState([]);
  const fetchCard = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCard(data);
  };
  useEffect(() => {
    fetchCard();
  }, [url]);
  return card;
};
export default UseFetch;
