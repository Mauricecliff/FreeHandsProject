/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useId } from "react";

function InputBox({
  // eslint-disable-next-line react/prop-types
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "ngn",
  currencyDisabled = false,
  amountDisabled = false,
}) {
  const labelId = useId();

  return (
    <div className=" bg-transparent flex justify-center">
      <div className=" bg-white p-7 placeholder:h-[40vh] mt-8 rounded-md sm:w-[50%]">
        <label htmlFor={labelId} className=" text-gray-400">
          {label}
        </label>
        <div className="flex justify-center">
          <input
            type="text"
            value={amount}
            name="price"
            id={labelId}
            className="block w-1/2 rounded-md border-0 py-1.5 pl-[1rem] pr-[0.8rem] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisabled}
          />
          <select
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
