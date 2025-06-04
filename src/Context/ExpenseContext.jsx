import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);

  const [itemsArr, setItemsArr] = useState(
    JSON.parse(localStorage.getItem("itemsArr")) || []
  );

  return (
    <ExpenseContext.Provider
      value={{
        titleValue,
        setTitleValue,
        amountValue,
        setAmountValue,
        itemsArr,
        setItemsArr,
        toggleBtn,
        setToggleBtn,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};
