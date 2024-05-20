import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export default function Reserve() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
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

  const navigate = useNavigate();

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
		<div id='reserve' className="flex align-middle shadow rounded-md ~p-5/10 bg-gray-100 ~border-spacing-5/10 my-0 mx-auto ~max-w-md/xl">
			<div className='w-full'>
      <form action="#" onSubmit={handleSubmit(onSubmit)} className='grid grid-flow-row-dense ~p-5/10'>
        {/* <label htmlFor="name" className='text-left font-semibold'>Name:</label> */}
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400 shadow-inner focus-within:outline-yellow-300 bg-white placeholder:bg-white mb-5' type="text" id="name" name="name" {...register("name", { required: true })} placeholder='Name'/>
        {errors.name && <span>This field is required</span>}

        {/* <label htmlFor="email" className='text-left font-semibold'>Email:</label> */}
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5' type="email" id="email" name="email" {...register("email", { required: true })} placeholder='Email'/>
        {errors.email && <span>This field is required</span>}

        {/* <label htmlFor="phone" className='text-left font-semibold'>Phone:</label> */}
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5' type="tel" id="phone" name="phone" {...register("phone", {valueAsNumber: true,required: true })} placeholder='Phone'/>
        {errors.phone && <span>This field is required</span>}

        {/* <label htmlFor="guest" className='text-left font-semibold'>Guests:</label> */}
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5' type="number" id="guest" name="guest" min={1} max={10} {...register("guest", {valueAsNumber: true, required: true })} />
        {errors.date && <span>This field is required</span>}

        {/* <label htmlFor="note" className='text-left font-semibold'>Note:</label> */}
        <textarea className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 min-h-20 mb-5' size={50} id="note" name="note" rows="5" cols="33" {...register("note", { required: false })} />
        {errors.date && <span>This field is required</span>}

        {/* <label htmlFor="date" className='text-left font-semibold'>Date:</label> */}
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5' type="date" id="date" name="date" min="2022-01-01" max="2022-12-31" {...register("date", {valueAsDate: true, required: true })} />
        {errors.date && <span>This field is required</span>}

        {/* <label htmlFor="time" className='text-left font-semibold'>Time:</label> */}
        <input className='~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5' type="time" id="time" name="time" min="09:00" max="17:00" {...register("time", {valueAsTime: true, required: true })} />
        {errors.time && <span>This field is required</span>}
        
  
        
        <Button variant="outline" type="submit" value="Submit" className="mt-5 ~p-4/8 bg-yellow-300 hover:bg-yellow-400 uppercase">BOOKING NOW</Button>
    

        
      </form>
      </div>
		</div>
    </div>
	);
}
