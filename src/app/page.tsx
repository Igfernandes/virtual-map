"use client";

import { Helper } from "@/components/Helper";
import { Map } from "@/components/Map";
import { Markers } from "@/components/Markers";
import { Options } from "@/components/Options";
import { Profile } from "@/components/Profile";
import { SearchBar } from "@/components/SearchBar";
import { Tags } from "@/components/Tags";
import MapNavigationProvider from "@/contexts/MapNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <MapNavigationProvider>
      <div className="h-[100vh]  text-neutral-800">
        <Map />
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="flex">
            <div className="w-[16%]">
              <Image
                className="w-full object-contain bg-[#e5002f] p-1 shadow rounded-br-2xl"
                src="/images/NaPalmaDaMao.png"
                alt="logo maricá"
                width={200}
                height={100}
              />
            </div>
            <div className="mt-1 ml-2">
              <SearchBar />
              <Tags />
            </div>
          </div>
          <div>
            <Helper />
          </div>
        </div>
        <Profile />
        <Options />
        <Markers />
      </div>
    </MapNavigationProvider>
  );
}
