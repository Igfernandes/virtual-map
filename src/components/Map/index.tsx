import Image from "next/image";

export function Map() {
  return (
    <div className="map absolute w-full h-full left-0 top-0 ">
      <Image
        className="block w-[100vw] h-[100vh]"
        width={1400}
        height={650}
        src="/images/map.jpg"
        alt="mapa maricá"
      />
    </div>
  );
}
