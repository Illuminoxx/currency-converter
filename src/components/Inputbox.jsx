import React from "react";

function Inputbox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions= [],
    selectedcurrency="usd",
   amountdisabled = false,
   currencydisabled = false,
   className = ""

  
}) 
   {

    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
<label className="text-black/5000 mb-2 inline-block">
    {label}
</label>

                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisabled}
                    value={amount}
                    onChange={(e) => onamountchange && onamountchange(e.target.value)}
                />

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/4000 mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                    value={selectedcurrency}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencydisabled}
                >
                    
                       {currencyoptions.map((currency) => (
                            <option key={currency} 
                            value={currency}>
                                {currency}
                            </option>
                        ))}


                </select>
            </div>
        </div>
    );
}

export default Inputbox;

