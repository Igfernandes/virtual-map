export function Modal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div className="absolute z-0 bg-neutral-800 w-full h-full opacity-55"></div>
      <div className="bg-white w-[30%] h-[50%] relative z-10 mx-auto mt-[10%] rounded-lg">
        <div className="flex items-center">
          <div className="text-black font-semibold text-xl p-2">
            <span>Faça sua busca</span>
          </div>
          <div className="text-black">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="fill-neutral-800 w-4"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
