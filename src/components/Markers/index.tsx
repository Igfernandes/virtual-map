import { _MOCK_MARKS_ } from "@/data/markers";
import { Marker } from "./Marker";

export function Markers() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 ">
      {_MOCK_MARKS_.map((marker, key) => (
        <Marker {...marker} key={`${marker.title}_${key}`} />
      ))}
    </div>
  );
}
