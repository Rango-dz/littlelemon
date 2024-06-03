import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import React, { useContext, useEffect, useState } from 'react'
import DataContext from './DataContext';
import { useNavigate } from 'react-router-dom';

export function OrderListPop() {
  const { ordersData } = useContext(DataContext);
  
  const [orderList, setOrderList] = useState(null);
  
  const navigate  = useNavigate();
  
  useEffect(()=> {
    setOrderList(ordersData)
  },[ordersData])
  
  console.log('from orderListpop', orderList)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size='small' className='self-center  px-4 gap-2'>
        <img className='w-8 h-8' src="/add2.svg" alt="" />  
        <span class="relative flex h-5 w-5">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75">
  </span>
        <span className=" font-bold inline-flex rounded-full h-5 w-5 bg-orange-300 text-white justify-center"> {orderList && orderList.length}
        </span>
</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Order List</SheetTitle>
          <SheetDescription>
            All of your orders listed here
          </SheetDescription>
        </SheetHeader>
        <div className="uppercase font-semibold antialiased animate-in transition-transform duration-200 ease-in">Orders 
      <span> {orderList && orderList.length} </span>
    </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => navigate('/checkout', {replace: true})} type="submit">Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
