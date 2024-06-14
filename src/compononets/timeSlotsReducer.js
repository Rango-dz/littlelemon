// timeSlotsReducer.js
export const initialTimeSlots = [
  { time: "08:00 - 09:00", available: true, slot: "1" },
  { time: "09:00 - 10:00", available: true, slot: "1" },
  { time: "10:00 - 11:00", available: true, slot: "1" },
  { time: "11:00 - 12:00", available: true, slot: "1" },
  { time: "12:00 - 13:00", available: true, slot: "1" },
  { time: "13:00 - 14:00", available: true, slot: "1" },
  { time: "14:00 - 15:00", available: true, slot: "1" }
];

export function initializeTimes() {
  return initialTimeSlots;
}

export function updateTimes(state, action) {
  return state.map(slot =>
    slot.time === action.payload.time ? { ...slot, available: !slot.available } : slot
  );
}
