import React, { useEffect } from "react";
import { useExpenseContext } from "../Context/ExpenseContext";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = ({ btnText, isEdit }) => {
  const {
    titleValue,
    setTitleValue,
    amountValue,
    setAmountValue,
    itemsArr,
    setItemsArr,
    toggleBtn,
    setToggleBtn,
  } = useExpenseContext();

  const handleAdd = () => {
    if (titleValue == "" || amountValue == "") {
      alert("Both fields are mandatory.");
      return;
    } else {
      setItemsArr([
        {
          id: uuidv4(),
          itemName: titleValue,
          itemPrice: +amountValue,
        },
        ...itemsArr,
      ]);

      if (isEdit) {
        setToggleBtn(!toggleBtn);
      }

      setTitleValue("");
      setAmountValue("");
    }
  };

  useEffect(() => {
    localStorage.setItem("itemsArr", JSON.stringify(itemsArr));
  }, [itemsArr]);

  return (
    <div
      className={`flex flex-col gap-3 w-full ${
        isEdit ? "max-w-full" : "max-w-[70%]"
      }`}
    >
      <div className="flex flex-col gap-1 grow">
        <label
          htmlFor="title"
          className="text-lg font-medium ms-1 text-[#4f545f]"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full border-2 border-[#CBD5E1] rounded-md py-1 px-2 font-medium text-lg"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="amount"
          className="text-lg font-medium ms-1 text-[#4f545f]"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="w-full border-2 border-[#CBD5E1] rounded-md py-1 px-2 font-medium text-lg"
          value={amountValue}
          onChange={(e) => setAmountValue(+e.target.value)}
        />
      </div>
      <div className="text-center w-full">
        <button
          className="bg-[#3B82F6] text-white py-1.5 font-medium text-lg transition-colors hover:bg-[#2563EB] cursor-pointer w-full rounded-md"
          onClick={() => handleAdd()}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
