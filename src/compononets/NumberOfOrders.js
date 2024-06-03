import React, { useContext, useEffect } from 'react'
import DataContext from './DataContext';

export default function NumberOfOrders() {
  const { ordersData } = useContext(DataContext);
  
  useEffect(()=> {
    console.log('order',ordersData);
  },[ordersData])
  
 

  // const gettingOrders = (data) => {
  //   setOrders(data);
  // }


  return (
    <div className="uppercase font-semibold antialiased animate-in transition-transform duration-200 ease-in">Orders 
      <span> {ordersData.length} </span>
    </div>
  )
}
