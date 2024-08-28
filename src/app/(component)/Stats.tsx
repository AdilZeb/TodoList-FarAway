export default function Stats({ items }: any) {
  if (items.length === 0) return;
  const numitem = items.length;
  const numpacked = items.filter((item: any) => item.packed).length;
  const percentage = Math.round((numpacked / numitem) * 100);

  return (
    <footer className="w-full bg-blue-300 h-[4rem]  flex justify-center items-center">
      <em className="p-4">
        You have {numitem} item on your list and you pckes {numpacked} (
        {percentage}%)
      </em>
    </footer>
  );
}
