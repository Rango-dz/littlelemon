/* global fetchAPI */

import Header from "./compononets/Header";
import Footer from "./compononets/Footer";
import ReservetableHero from "./compononets/ReservetableHero";
import { useEffect, useState } from "react";
import AvailableSlots from "./compononets/AvailableSlots";
import BookingForm from "./compononets/BookingForm";

// Function to fetch available times for a given date
const fetchAvailableTimes = async (date) => {
  const times = await fetchAPI(date);
  return times.map(time => ({
    time,
    available: true,
    slot: "1"
  }));
};

export default function BookingPage() {
  const [timeSlots, setTimeSlots] = useState([]);

  // Initialize times for today's date
  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date().toISOString().split('T')[0];
      const initialTimes = await fetchAvailableTimes(today);
      setTimeSlots(initialTimes);
    };
    initializeTimes();
  }, []);

  // Update times when a new date is selected
  const handleDateChange = async (selectedDate) => {
    const updatedTimes = await fetchAvailableTimes(selectedDate);
    setTimeSlots(updatedTimes);
  };

  const handleTimeSlotChange = (selectedSlot) => {
    setTimeSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.time === selectedSlot.time ? { ...slot, available: !slot.available } : slot
      )
    );
  };

  return (
    <div className="grid grid-flow-row justify-stretch">
      <Header />
      <ReservetableHero />
      <main className="container ~mt-5/10 px-3 py-5 bg-light text-center mx-auto">
        <AvailableSlots slots={timeSlots} />
        <BookingForm slots={timeSlots} onTimeSlotChange={handleTimeSlotChange} onDateChange={handleDateChange} />
      </main>
      <Footer />
    </div>
  );
}
