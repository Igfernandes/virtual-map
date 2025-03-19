export function SearchBar() {
  return (
    <div className="form-group flex items-center bg-white rounded-xl px-3 border-2 border-neutral-300 shadow">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Pesquisar em Maricá"
        className="text-black w-[25vw] h-[7vh] outline-0"
      />
      <label
        htmlFor="search"
        className="w-7 cursor-pointer border-l-2 pl-2 ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="fill-neutral-500"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </label>
    </div>
  );
}
