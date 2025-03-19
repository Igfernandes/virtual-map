import React, { createContext, useContext, useMemo, useState } from "react";
import { MapNavigationContextData, MapNavigationProps } from "./types";

export const MapNavigationContext = createContext({} as MapNavigationContextData);

const MapNavigationProvider = ({ children }: MapNavigationProps) => {
  const [showProfile, setShowProfile] = useState<number>(0);

  const handleToggleProfile = (id: number) => {
    setShowProfile(id != showProfile ? id : 0);
  };

  const mapProps = useMemo(
    () => ({
      handleToggleProfile,
      showProfile,
    }),
    [showProfile]
  );

  return (
    <MapNavigationContext.Provider value={mapProps}>
      {children}
    </MapNavigationContext.Provider>
  );
};

export default MapNavigationProvider;

export function useMapNavigationContext() {
  return useContext(MapNavigationContext);
}
