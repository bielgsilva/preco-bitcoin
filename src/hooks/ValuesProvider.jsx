import { useState } from "react";

export default function ValuesProvider() {

  const [data, setData] = useState([]);
  const [btcPrice, setBtcPrice] = useState(null);
  const [btcDate, setBtcDate] = useState(null);
  const [email,setEmail] = useState('');



  return ({
    data, setData,
    btcPrice, setBtcPrice,
    btcDate, setBtcDate,
    email,setEmail
  });
}