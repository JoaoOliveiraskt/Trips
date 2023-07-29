import React from 'react'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'
import { Trip } from '@prisma/client'

interface TripHeaderProps {
    trip: Trip,
};

const TripHeader = ({trip}: TripHeaderProps) => {
  return (
    <div className='flex flex-col'>
        <div className="relative h-[300px] w-full lg:hidden">
        <Image
          src={trip.coverImage}
          alt={trip.name}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>

      {/* título e informações */}
      <div className="flex flex-col  p-5 lg:order-1 lg:p-0 lg:mb-10">
        <h2 className="text-semibold text-xl lg:text-3xl text-primaryDark">{trip.name}</h2>

        <div className="flex items-center gap-2 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs text-grayPrimary underline">{trip.location}</p>
        </div>

        <p className="text-xs text-grayPrimary">
          <span className="primary">
            R${trip.PricePerDay.toString()} por dia
          </span>
        </p>
      </div>

    </div>
  )
}

export default TripHeader