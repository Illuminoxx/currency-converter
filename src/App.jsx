import { useState } from 'react'
 import { useMemo } from "react";
import { Inputbox } from "./components";
import usecurrencyinfo from './hooks/currencyinfo'



function App() {
    
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")


 const currencyInfo = usecurrencyinfo(from) || {}

const options = useMemo(
  () => Object.keys(currencyInfo),
  [currencyInfo]
);



const swap = () => {
  const prevFrom = from;
  const prevTo = to;
  const prevAmount = amount;
  const prevConverted = convertedAmount;

  setFrom(prevTo);
  setTo(prevFrom);
  setAmount(String(prevConverted));
  setConvertedAmount(prevAmount);
};
  
  const convert = () => {
  const numericAmount = parseFloat(amount);

  if (Number.isNaN(numericAmount) || !currencyInfo[to]) return;

  setConvertedAmount(
    (numericAmount * currencyInfo[to]).toFixed(2)
  );
};

if (options.length === 0) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <h2 className="text-2xl text-white animate-pulse">
        Loading currencies...
      </h2>
    </div>
  );
}

  return (
  <div
    className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat px-4 "
    style={{
      backgroundImage:
        "url('https://4kwallpapers.com/images/walls/thumbs_3t/13833.jpg')",
    }}
  >
  <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6 tracking-wide -ml-18">
    
  <span className="text-teal-400"> 💲Currency</span>{" "}
  <span className="text-white">Exchange</span>
</h1>

    <div className="w-full max-w-lg bg-black-900 ">
      <div className="
rounded-2xl
p-5
sm:p-6
backdrop-blur-md
bg-black/50
border
border-white/20
shadow-2xl
transition-all
duration-300
hover:scale-[1.02]
">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
       <div className="w-full mb-1 bg-black">
        <Inputbox
            label="From"
            amount={amount}
            onamountchange={setAmount}
            oncurrencychange={setFrom}
            currencyoptions={options}
            selectedcurrency={from}
            
        />
    
</div>

          <div className="relative flex justify-center my-3 ">
            <button
              type="button"
               disabled={!amount}
              onClick={swap}
              className="
    w-12 h-12
    bg-teal-600
    rounded-full
    text-white
    font-semibold
    shadow-lg
    disabled:bg-gray-500
    disabled:cursor-not-allowed
    transition-all
    duration-300
    hover:rotate-180
    hover:scale-110
    active:scale-90
  "
>
              ↕
            </button>
          </div>

       <div className="w-full mt-1 mb-4 ">
   
        <Inputbox
            label="To"
            amount={convertedAmount}
            oncurrencychange={setTo}
            currencyoptions={options}
            selectedcurrency={to}
            amountdisabled
        />
    
</div>

<button
  type="submit"
  disabled={!amount}
  className="
    w-full
    bg-blue-600
    text-white
    py-3
    rounded-xl
    text-lg
    transition-all
    duration-300
    hover:bg-blue-700
    hover:-translate-y-1
    active:scale-95
    disabled:bg-gray-500
    disabled:cursor-not-allowed
  "
>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  </div>
);

}

 export default App
