// timeSlotsReducer.test.js
import { initializeTimes, updateTimes, initialTimeSlots } from './timeSlotsReducer';

describe('timeSlotsReducer', () => {
  describe('initializeTimes', () => {
    it('should return the correct initial time slots', () => {
      const result = initializeTimes();
      expect(result).toEqual(initialTimeSlots);
    });
  });

  describe('updateTimes', () => {
    it('should return the same state if no action is provided', () => {
      const state = initialTimeSlots;
      const action = { type: 'UPDATE_TIME_SLOT', payload: { time: "08:00 - 09:00" } };
      const result = updateTimes(state, action);
      expect(result).not.toBe(state); // ensure a new array is returned
      expect(result[0].available).toBe(false); // check that the slot availability is toggled
    });

    it('should toggle the availability of the specified time slot', () => {
      const state = initialTimeSlots;
      const action = { type: 'UPDATE_TIME_SLOT', payload: { time: "08:00 - 09:00" } };
      const result = updateTimes(state, action);
      expect(result[0].available).toBe(false);
    });
  });
});
