"use client";
import { useState } from "react";

export default function PackingList({
  items,
  DeleteItem,
  handleToogleItem,
  handleDeleteAllList,
}: any) {
  const [sort, setSort] = useState("Input");
  let sortedItem;
  if (sort === "Input") {
    sortedItem = items;
  }
  if (sort === "Description") {
    sortedItem = items
      .slice()
      .sort((a: any, b: any) => a.description.localeCompare(b.description));
  }
  if (sort === "Packed") {
    sortedItem = items
      .slice()
      .sort((a: any, b: any) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="w-full flex flex-col justify-between items-center   h-[70vh] p-3 bg-yellow-900 text-yellow-100">
      <ul className="flex gap-[4rem]">
        {sortedItem.map((item: any) => (
          <List
            item={item}
            key={item.id}
            DeleteItem={DeleteItem}
            handleToogleItem={handleToogleItem}
          />
        ))}
      </ul>
      <div className="flex gap-3">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-yellow-100 rounded-md focus:outline-none focus:shadow-outline text-orange-900"
        >
          <option value={"Input"}>Sorted by Input</option>
          <option value={"Description"}>Sorted By Description</option>
          <option value={"Packed"}>Sorted By Packed</option>
        </select>
        <button
          onClick={handleDeleteAllList}
          className="bg-yellow-100 rounded-lg border text-orange-900 text-sm p-1"
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
function List({ item, DeleteItem, handleToogleItem }: any) {
  return (
    <div>
      <li key={item.id} className="text-2xl flex gap-2">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleToogleItem(item.id)}
        />
        <span className={`${item.packed ? "line-through" : ""}`}>
          {item.description}
        </span>
        <button className="text-sm" onClick={() => DeleteItem(item.id)}>
          ❌
        </button>
      </li>
    </div>
  );
}
