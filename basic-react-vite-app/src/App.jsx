import { useState } from "react";
import { Button, InputBox, SwapButton } from "./components";
import useCurrency from "./hooks/useCurrency";
import "./index.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("ngn");

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // eslint-disable-next-line no-unused-vars
  const onSwapAndConvert = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  console.log("selectedCurr>>>", from);
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663931932688-306b0197d388?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-center text-4xl text-[#5983b9]">
        Currency Converter
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          currencyOptions={options}
          amount={amount}
          selectedCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <SwapButton onSwapAndConvert={onSwapAndConvert} />
        <InputBox
          currencyOptions={options}
          amount={convertedAmount}
          selectedCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          amountDisabled={true}
          convert={convert}
        />
        <Button />
      </form>
    </div>
  );
}

export default App;
