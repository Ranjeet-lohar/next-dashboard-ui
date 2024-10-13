"use client"

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import the calendar CSS

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


// TEMPORARY EVENTS
const event = [
  { 
    id: 1,
    title: 'Lorem ipsom dolor', 
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  { 
    id: 2,
    title: 'Lorem ipsom dolor', 
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  { 
    id: 3,
    title: 'Lorem ipsom dolor', 
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];




const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date()); // Using setValue instead of onChange for clarity

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={setValue} value={value} />
      <div className="flex items-center justify-between w-full">
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <div className="
        ">
        <Image src="/moreDark.png" alt="" width={20} height={20}  />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {event.map(event =>(
          <div className="p-5 rounded-md border-2 border-gray-100 border-t4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="text-base font-semibold text-gray-600">{event.title}</h1>
              <span className='text-xs text-gray-300'>{event.time}</span>
              </div>
              <p className='text-sm text-gray-400 mt-2'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;
