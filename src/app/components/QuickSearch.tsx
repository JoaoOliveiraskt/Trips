import React from "react";
import Image from "next/image";
import HorizontalSeparator from "@/components/HorizontalSeparator";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5 ">
      <HorizontalSeparator text="Pesquise por" />

      <div className="flex justify-between w-full mt-5">
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary ">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Image width={35} height={35} src="/farm-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary ">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Image width={35} height={35} src="/cottage-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary ">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Image width={35} height={35} src="/inn-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary ">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
