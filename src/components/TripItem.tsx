import React from "react";
import { Trip } from "@prisma/client";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-[280px] h-[280px]">
        <Image
          className="rounded-lg shadow-md"
          src={trip.coverImage}
          fill
          style={{ objectFit: "cover" }}
          alt={trip.name}
        />
      </div>

      <h3 className="text-primaryDark font-medium text-sm mt-2">{trip.name}</h3>

      <div className="flex items-center gap-2 my-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className="text-xs text-grayPrimary">{trip.location}</p>
      </div>

      <p className="text-xs text-grayPrimary ">
        <span className="text-primary font-medium">
          R${trip.PricePerDay.toString()}
        </span>
        por dia
      </p>
    </div>
  );
};

export default TripItem;
