import {useState, useEffect} from 'react'


function usecurrencyinfo(currency) {

    const [data, setData] = useState("null")

 useEffect(() => {

   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
   .then(res => res.json())
   .then(res => setData(res[currency]))
        console.log(data)
   
  }, [currency])
  
  console.log(data)

  return data
}

export default usecurrencyinfo;