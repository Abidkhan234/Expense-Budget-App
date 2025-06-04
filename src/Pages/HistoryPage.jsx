import React, { useEffect, useState } from "react";
import { useExpenseContext } from "../Context/ExpenseContext";
import { AiFillDelete } from "react-icons/ai";
import { MdCancel, MdEdit } from "react-icons/md";
import ExpenseForm from "../Components/ExpenseForm";

const HistoryPage = () => {
  const {
    itemsArr,
    setItemsArr,
    titleValue,
    amountValue,
    setTitleValue,
    setAmountValue,
    toggleBtn,
    setToggleBtn,
  } = useExpenseContext();

  useEffect(() => {
    localStorage.setItem("itemsArr", JSON.stringify(itemsArr));
  }, [itemsArr]);

  // For Total Amount
  let total = 0;

  itemsArr.forEach((item) => {
    total += item.itemPrice;
  });
  // For Total Amount

  // For Delete Button
  const handleDelete = (id) => {
    const newItemsArr = itemsArr.filter((v, i) => v.id != id);
    setItemsArr(newItemsArr);
  };
  // For Delete Button

  // For Edit Button

  const handleEdit = (id) => {
    const newItemArr = itemsArr.filter((v) => v.id == id);

    handleDelete(id);

    setAmountValue(newItemArr[0].itemPrice);

    setTitleValue(newItemArr[0].itemName);

    setToggleBtn(!toggleBtn);
  };

  // For Edit Button

  return (
    <div className="h-11/13 w-full flex justify-center items-center">
      <div
        className={`${
          toggleBtn ? "bottom-[0%]" : "translate-y-[100%]"
        } fixed bottom-0 left-0 transition-all duration-300 h-[50%] w-full bg-white z-50`}
      >
        <div className="absolute top-5 right-5">
          <button
            className="font-semibold text-4xl text-red-500 cursor-pointer"
            onClick={() => setToggleBtn(!toggleBtn)}
          >
            <MdCancel />
          </button>
        </div>
        <div className="flex justify-center items-center h-full w-full">
          <div className="w-full max-w-[500px]">
            <ExpenseForm btnText={"Save Expense"} isEdit={true} />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full max-w-[400px] rounded-xl flex flex-col items-center py-3 px-3 gap-3 shadow ">
        <h1 className="font-semibold text-2xl text-gray-800">
          Expense History
        </h1>

        <div className="flex flex-col gap-3 w-full">
          <div className="bg-gray-200 rounded-md py-3 px-2 flex justify-between items-center grow border border-gray-400">
            <span className="font-semibold text-xl text-gray-800">Total</span>
            <span className="font-semibold text-xl text-gray-800">
              ${total}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {itemsArr.map((v, i) => {
              return (
                <div
                  key={i}
                  className="parent flex justify-between items-center border-b border-b-gray-400 bg-gray-200 rounded-md p-2 relative overflow-hidden"
                >
                  <span className="font-medium text-lg">{v.itemName}</span>
                  <span className="font-medium text-lg">${v.itemPrice}</span>
                  {/* For Overlay */}
                  <div className="child absolute top-0 left-0 w-full h-full bg-gray-400 opacity-0 invisible transition-opacity flex justify-between items-center px-3">
                    <button
                      className="font-semibold text-xl text-white bg-red-500 rounded-full p-1 cursor-pointer"
                      onClick={() => handleDelete(v.id)}
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      className="font-semibold text-xl text-white bg-blue-500 rounded-full p-1 cursor-pointer"
                      onClick={() => handleEdit(v.id)}
                    >
                      <MdEdit />
                    </button>
                  </div>
                  {/* For Overlay */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
