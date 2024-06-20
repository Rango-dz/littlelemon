import Header from "./compononets/Header";
import Footer from "./compononets/Footer";
import ReservetableHero from "./compononets/ReservetableHero";
import { useEffect, useState } from "react";
// import AvailableSlots from "./compononets/AvailableSlots";
import BookingForm from "./compononets/BookingForm";
import { fetchAPI } from "./lib/api";

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
  const [timeSlots, setTimeSlots] = useState(() => {
    const savedslots = localStorage.getItem("timeslot");
    return savedslots === null || savedslots.length === 0 ? [] : JSON.parse(savedslots);
  });

  
 useEffect(()=>{
   // Initialize times for today's date 
   const initializeTimes = async () => {
    const today = new Date();
    const initialTimes = await fetchAvailableTimes(today);
    console.log("game",timeSlots);
    setTimeSlots(initialTimes);
    localStorage.setItem("timeslot", JSON.stringify(timeSlots));
  };

  const savedslots = localStorage.getItem("timeslot");
  savedslots === null || savedslots.length === 0 ?  initializeTimes() : console.log( "already initialized");

 },[])

  
  // Update times when a new date is selected
  const handleDateChange = async (selectedDate) => {
    const updatedTimes = await fetchAvailableTimes(selectedDate);
    localStorage.setItem("timeslot", JSON.stringify(updatedTimes));
  };

  const handleTimeSlotChange = (selectedSlot) => {
    setTimeSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.time === selectedSlot.time ? { ...slot, available: !slot.available } : slot
      )
    );
    // localStorage.setItem("timeslot", JSON.stringify(timeSlots));
  };

  useEffect(()=> {
    localStorage.removeItem("timeslot");
    localStorage.setItem("timeslot", JSON.stringify(timeSlots));
    console.log(timeSlots);
  }, [timeSlots])

  return (
    <div className="grid grid-flow-row justify-stretch">
      <Header />
      <ReservetableHero />
      <main className="container ~mt-5/10 px-3 py-5 bg-light text-center mx-auto">
        {/* <AvailableSlots slots={timeSlots} /> */}
        <BookingForm slots={timeSlots} onTimeSlotChange={handleTimeSlotChange} onDateChange={handleDateChange} />
      </main>
      <Footer />
    </div>
  );
}
