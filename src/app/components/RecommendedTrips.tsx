import HorizontalSeparator from "@/components/HorizontalSeparator";
import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import React from "react";

async function getTrips() {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const RecommendedTrips = async () => {
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <HorizontalSeparator text="Destinos recomendados" />

      <div className="flex flex-col items-center mt-5 gap-7 lg:flex lg:flex-row lg:flex-wrap lg:gap-10 lg:justify-center lg:mt-14">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
