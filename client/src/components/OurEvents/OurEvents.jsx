import React from 'react';
import EventCard from './eventCard.jsx'; 
import {pastEvents , upcomingEvents} from './EventData.js';

const EventsContainer = () => {
  return (
    <div className="min-h-screen bg-[#121212] py-12 px-6 lg:px-20">
      
      {/* Header Section */}
      <div className="mb-12 border-l-4 border-cyan-400 pl-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Our <span className="text-cyan-400">Events</span>
        </h1>
        <p className="text-gray-400 mt-2">Catch up on where we've been and where we're going next.</p>
      </div>

      {/* Upcoming Events Section */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>
          <div className="h-[1px] flex-grow bg-zinc-800"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p className="text-zinc-500 italic">No upcoming events scheduled yet.</p>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-400">Past Events</h2>
          <div className="h-[1px] flex-grow bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80">
          {pastEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default EventsContainer;