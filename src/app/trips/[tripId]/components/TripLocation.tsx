import React from 'react'
import Image from 'next/image';
import Button from '@/components/Button';

interface TripLocationProps {
    location: string;
    locationDescription: string;
};

const TripLocation = ({location, locationDescription}: TripLocationProps) => {
  return (
    <div className='p-5'>
        <h2 className='font-semibold text-primaryDark mb-5 '>Localização</h2>
        <div className="relative h-[280px] w-full">
        <Image className='rounded-lg shadow-md' src="/map-mobile.png" alt={location} style={{objectFit: "cover"}} fill/>
        </div>

        <h3 className='text-primaryDark text-sm font-semibold mt-2'>{location}</h3>
        <p className='text-xs text-primary-dark mt-2 leading-5'>{locationDescription}</p>
      <Button variant='outlined' className=" w-full mt-5">Ver no Google Maps</Button>
    </div>
  )
}

export default TripLocation;