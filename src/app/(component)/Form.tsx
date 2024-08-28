"use client";
import { useState } from "react";

export default function Form({ Additems }: any) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!description) return;

    const newitem = {
      id: Math.ceil(Math.abs(Math.random() * 1000)),
      description: description,
      quantity: select,
      packed: false,
    };
    Additems(newitem);
    console.log(newitem);
    setDescription("");
    setSelect(1);
  }

  return (
    <form
      className="w-full flex gap-3 justify-center items-center h-auto p-1 mx-auto bg-orange-400 "
      onSubmit={handleSubmit}
    >
      <h2 className="text-1xl p-3">what do you need for your trip?</h2>
      <select
        className="bg-yellow-100 rounded-md h-[2rem] focus:outline-none focus:shadow-outline p-2"
        value={select}
        onChange={(e: any) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-yellow-100 rounded-md h-[2rem] focus:outline-none focus:shadow-outline p-2"
        placeholder=" Item..."
      ></input>
      <button type="submit" className="px-3 py-1 rounded-md bg-blue-200">
        Add
      </button>
    </form>
  );
}
