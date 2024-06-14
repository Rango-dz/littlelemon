import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

const mockSlots = [
  { time: '12:00 PM', available: true },
  { time: '1:00 PM', available: false },
  { time: '2:00 PM', available: true },
];

const mockOnTimeSlotChange = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const renderComponent = () =>
  render(
    <BrowserRouter>
      <BookingForm slots={mockSlots} onTimeSlotChange={mockOnTimeSlotChange} />
    </BrowserRouter>
  );

describe('BookingForm', () => {
  test('renders the form with all fields', () => {
    renderComponent();

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time Slot/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Note/i)).toBeInTheDocument();
  });

  test('shows error messages when required fields are empty', async () => {
    renderComponent();

    await act(async () => {
      fireEvent.click(screen.getByText(/Book now/i));
    });

    // Adjust to match the actual number of required fields
    expect(await screen.findAllByText(/This field is required/i)).toHaveLength(4);
  });

  test('calls onTimeSlotChange when a time slot is selected', () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Time Slot/i), { target: { value: '12:00 PM' } });

    expect(mockOnTimeSlotChange).toHaveBeenCalledWith({ time: '12:00 PM', available: true });
  });

  test('navigates to /booking with form data on successful submission', async () => {
    renderComponent();

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
      fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-06-13' } });
      fireEvent.change(screen.getByLabelText(/Time Slot/i), { target: { value: '12:00 PM' } });
      fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 4 } });

      fireEvent.click(screen.getByText(/Book now/i));
    });

    expect(mockNavigate).toHaveBeenCalledWith('/booking', {
      state: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        date: new Date('2024-06-13'),
        guests: 4,
        note: '',
        timeSlot: '12:00 PM',
      },
      replace: true,
    });
  });
});
