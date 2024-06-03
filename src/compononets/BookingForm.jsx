import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Reserve() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: 0,
      time: 0,
      guests: 0,
      note: '',
    },
  });


  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      navigate('/success', {
        state: data,
        replace: true,
      });
    }
  };

  return (
    <div>
      <h2 className='text-center ~text-3xl/5xl font-semibold text-yellow-300 mb-5'>Reserve a table</h2>
      <span className='text-center text-gray-500 prose font-medium mb-4'>Please fill in the form below to reserve a table</span>
      <div className="flex align-middle shadow rounded-md ~p-5/10 bg-gray-100 ~border-spacing-5/10 my-0 mx-auto ~max-w-md/xl" >
    <form action="#" onSubmit={handleSubmit(onSubmit)} className='grid grid-flow-row-dense w-full text-left'>
      <div id='reserve' className='w-full p-0 m-0'>
        <label className='font-semibold' htmlFor="name">Name</label>
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full' type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required.</span>}
      </div>
      <div>
        <label className='text-left font-semibold' htmlFor="email">Email</label>
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full' type="text" id="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required.</span>}
      </div>
      <div>
        <label className='text-left font-semibold' htmlFor="phone">Phone</label>
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full' type="text" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span>This field is required.</span>}
      </div>
      <div>
        <label className='text-left font-semibold' htmlFor="date">Date</label>
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full' type="date" id="date" {...register('date', { valueAsDate: true, required: true })} />
        {errors.date && <span>This field is required.</span>}
      </div>
      <div>
        <label className='text-left font-semibold' htmlFor="time">Time</label>
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full' type="time" id="time" {...register('time', { valueAsTime: true, required: true })} />
        {errors.time && <span>This field is required.</span>}
      </div>
      <div>
        <label className='text-left font-semibold' htmlFor="guests">Number of guests</label>
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full' type="number" id="guests" min={0} max={8} {...register('guests', { valueAsNumber: true, required: true })} />
        {errors.guests && <span>This field is required.</span>}
      </div>
      <div>
        <label className='text-left font-semibold' htmlFor="note">Note</label>
        <textarea className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 min-h-20 mb-5 w-full' size={50} id="note" name="note" rows="5" cols="33" {...register('note', { required: false })}></textarea>
        {errors.note && <span>This field is required.</span>}
      </div>
      <button  variant="outline" value="Submit" className="mt-5 ~p-2/3 bg-yellow-300 hover:bg-yellow-400 uppercase rounded shadow font-bold" type="submit">Book now</button>
    </form>
    </div>
    </div>
  );
}
