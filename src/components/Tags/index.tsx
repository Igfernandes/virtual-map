export function Tags() {
  const titulo = ["Apresentações", "Campanhas", "Eventos"];
  return (
    <div className="w-[20%] mt-1">
      <ul className="text-neutral-600 flex">
        {titulo.map((tag) => (
          <li
            key={tag}
            className="px-2 py-[1px] bg-white text-sm rounded-2xl mr-2 shadow cursor-pointer hover:bg-red-500 hover:text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
