import { Prisma, TripReservation } from "@prisma/client";
import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Button from "@/components/Button";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
}

const UserReservationItem = ({ reservation }: UserReservationItemProps) => {
  const { trip } = reservation;

  return (
    <div>
      {/* Trip Card */}
      <div className="flex flex-col p-5 mt-5 border-grayLight border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLight border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              className="rounded-lg"
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDark font-semibold">
              {trip.name}
            </h2>

            <div className="flex items-center gap-2">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 text-primaryDark">
          <h3 className="font-semibold text-sm">Data:</h3>
          <div className="flex gap-2 mt-1">
            <p className="text-sm">
              {format(new Date(reservation.StartDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
            {" - "}
            <p className="text-sm">
              {format(new Date(reservation.EndDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
          </div>

          <h3 className="font-semibold mt-5 text-sm">Hóspedes:</h3>
          <p className="text-sm pb-5">{reservation.guests} hóspedes</p>
          

          <h3 className="font-semibold text-sm text-primaryDark mt-3 pt-5 border-t border-solid border-grayLight">
            Informações sobre o preço:
          </h3>

          <div className="flex justify-between mt-1">
            <p className="text-primaryDark text-sm mt-2">Total:</p>
            <p className="font-medium text-sm mt-2">R${Number(reservation.totalPaid)}</p>
          </div>

          <Button variant="danger" className="mt-6" >Cancelar</Button>
        </div>
      </div>
    </div>
  );
};

export default UserReservationItem;
