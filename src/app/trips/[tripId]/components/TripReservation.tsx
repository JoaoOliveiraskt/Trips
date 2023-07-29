"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker
          className="w-full"
          placeholderText="Data de início"
          onChange={() => {}}
        />

        <DatePicker
          className="w-full"
          placeholderText="Data final"
          onChange={() => {}}
        />
      </div>

      <Input
        className="mt-4"
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
      />

      <div className="flex justify-between mt-3">
        <p className="text-medium text-sm text-primaryDarker">Total:</p>
        <p className="text-medium text-sm text-primaryDarker">R$2.500</p>
      </div>

      <div className="w-full pb-10 border-b border-b-grayLighter">
        <Button className="mt-5 w-full">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;
