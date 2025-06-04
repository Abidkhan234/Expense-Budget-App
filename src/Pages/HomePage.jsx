import React, { useEffect } from "react";
import { useExpenseContext } from "../Context/ExpenseContext";
import ExpenseForm from "../Components/ExpenseForm";

const HomePage = () => {
  const {
    titleValue,
    setTitleValue,
    amountValue,
    setAmountValue,
    itemsArr,
    setItemsArr,
  } = useExpenseContext();

  return (
    <div className="h-11/13 w-full flex justify-center items-center">
      <div className="bg-[#FFFFFF] w-full max-w-[400px] rounded-xl flex flex-col items-center py-3 px-2 gap-4 shadow">
        <h1 className="font-semibold text-2xl text-gray-800">
          Daily Budget Tracker
        </h1>

        <div className="w-full flex justify-center">
          <ExpenseForm btnText={"Add Expense"} />
        </div>

        <fieldset className="w-full border py-3 px-4 rounded-md">
          <legend className="font-bold text-xl">Recent Expense:</legend>
          {itemsArr.map((v, i) => {
            if (i < 2) {
              return (
                <div
                  key={i}
                  className="bg-gray-200 rounded-md p-2 flex justify-between items-center w-full border border-gray-400 my-1"
                >
                  <span className="font-medium text-lg">{v.itemName}</span>
                  <span className="font-medium text-lg">{`$${v.itemPrice}`}</span>
                </div>
              );
            }
          })}
        </fieldset>
      </div>
    </div>
  );
};

export default HomePage;
