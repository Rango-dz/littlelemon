import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"

export default function BookingForm({ slots, onTimeSlotChange }) {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: 0,
      note: "",
    },
  });

  const watchedFields = watch(["name", "email", "phone", "date", "timeSlot", "guests"]);
  const allFieldsFilled = watchedFields.every(field => field !== "" && field !== undefined);

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setFormData(data);
      reset();
    }
  };

  const handleTimeSlotChange = (event) => {
    const selectedTime = event.target.value;
    const selectedSlot = slots.find(slot => slot.time === selectedTime);
    if (selectedSlot) {
      onTimeSlotChange(selectedSlot);
    }
  };

  const isDisabled = !allFieldsFilled;

  return (
    <div>
      <h2 className="text-center ~text-3xl/5xl font-semibold text-yellow-300 mb-5">
        Reserve a table
      </h2>
      <span className="text-center text-gray-500 prose font-medium mb-4">
        Please fill in the form below to reserve a table
      </span>
      <div className="flex align-middle shadow rounded-md ~p-5/10 bg-gray-100 ~border-spacing-5/10 my-0 mx-auto ~max-w-md/xl">
        <form
          action="#"
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-flow-row-dense w-full text-left"
        >
          <div id="reserve" className="w-full p-0 m-0">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
              type="text"
              id="name"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              tabIndex="1"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required.</span>}
          </div>
          <div>
            <label className="text-left font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
              type="text"
              id="email"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              tabIndex="2"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required.</span>}
          </div>
          <div>
            <label className="text-left font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
              type="text"
              id="phone"
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              tabIndex="3"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>This field is required.</span>}
          </div>
          <div>
            <label className="text-left font-semibold" htmlFor="date">
              Date
            </label>
            <input
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
              type="date"
              id="date"
              aria-required="true"
              aria-invalid={errors.date ? "true" : "false"}
              tabIndex="4"
              {...register("date", { valueAsDate: true, required: true })}
            />
            {errors.date && <span>This field is required.</span>}
          </div>
          <div>
            <label className="text-left font-semibold" htmlFor="timeSlot">
              Time Slot
            </label>
            <select
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
              id="timeSlot"
              aria-required="true"
              aria-invalid={errors.timeSlot ? "true" : "false"}
              tabIndex="5"
              {...register("timeSlot", { required: true })}
              onChange={handleTimeSlotChange}
            >
              <option key={"pick a time"} value="">
                  Pick a Time
              </option>
              {slots.map((slot, index) => (
                <option key={index} value={slot.time} disabled={!slot.available}>
                  {slot.time}
                </option>
              ))}
            </select>
            {errors.timeSlot && <span>This field is required.</span>}
          </div>
          <div>
            <label className="text-left font-semibold" htmlFor="guests">
              Number of guests
            </label>
            <input
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
              type="number"
              id="guests"
              min={1}
              max={8}
              aria-required="true"
              aria-invalid={errors.guests ? "true" : "false"}
              tabIndex="6"
              {...register("guests", { valueAsNumber: true, required: true })}
            />
            {errors.guests && <span>This field is required.</span>}
          </div>
          <div>
            <label className="text-left font-semibold" htmlFor="note">
              Note
            </label>
            <textarea
              className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 min-h-20 mb-5 w-full"
              size={50}
              id="note"
              name="note"
              rows="5"
              cols="33"
              aria-required="true"
              aria-invalid={errors.note ? "true" : "false"}
              tabIndex="7"
              {...register("note", { required: false })}
            ></textarea>
            {errors.note && <span>This field is required.</span>}
          </div>
      <AlertDialog type="submit" disabled={isDisabled}>
      <AlertDialogTrigger asChild>
      <button
            variant="outline"
            value="Submit"
            className={`mt-5 ~p-2/3 bg-yellow-300 hover:bg-yellow-400 uppercase rounded shadow font-bold ${isDisabled ? 'disabled' : ''}`}
            type="submit"
            aria-label="Submit form"
            role="button"
            disabled={isDisabled}
          >
            Book now
          </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="mb-10">
          <AlertDialogTitle>Please Confirm Your Order</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel 
          className="~p-2/3  uppercase rounded shadow font-bold"
                  aria-label="Cancel"
        role="button"
          >Cancel</AlertDialogCancel>
          <AlertDialogAction 
          className="~p-2/3 bg-yellow-400 hover:bg-yellow-500 uppercase rounded shadow font-bold"
          aria-label="Confirm"
          role="button" 
          onClick={() => navigate("/success", {state: formData, replace: true })}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </form>
      </div>
    </div>
  );
}