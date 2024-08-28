"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "./(component)/Logo";
import Form from "./(component)/Form";
import PackingList from "./(component)/Packinglist";
import Stats from "./(component)/Stats";
type Item = {
  id: number;
  name: string;
  packed: boolean;
  // Add other properties as needed
};
export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  function handleAdditems(item: any) {
    setItems((items) => [...items, item]);
  }
  function DeleteItem(id: any) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToogleItem(id: any) {
    setItems((items: any) =>
      items.map((item: any) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteAllList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <main className="w-screen   h-full mx-atu0 ">
      <Logo />
      <Form Additems={handleAdditems} />
      <PackingList
        items={items}
        DeleteItem={DeleteItem}
        handleToogleItem={handleToogleItem}
        handleDeleteAllList={handleDeleteAllList}
      />
      <Stats items={items} />
    </main>
  );
}
