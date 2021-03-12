import { useEffect, useState } from 'react';
export const HOST = 'http://localhost:8080'

export function GetData(endpoint){
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetch(`${HOST}/${endpoint}`, {
      mode:'cors'
    })
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, [endpoint]);
  return data;
}
