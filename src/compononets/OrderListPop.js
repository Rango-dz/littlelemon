import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import React, { useContext } from "react";
import DataContext from "./DataContext";
import { useNavigate } from "react-router-dom";

export function OrderListPop() {
  const { ordersData } = useContext(DataContext);
  const navigate = useNavigate();

  const renderCheckoutList = (ordersData) => {
    if (ordersData.length === 0) {
      return "Cart is Empty";
    }

    return ordersData.map((item) => (
      <div key={item.id} className="flex flex-row">
        <img src={item.image} alt="" className="w-10 h-10" />
        <div>{item.name}</div>
        <div>{item.qts}</div>
        <div>${item.qts * item.price}</div>
      </div>
    ));
  };

  const checkoutList = renderCheckoutList(ordersData);

  const calculateCheckoutPrice = (ordersData) => {
    if (!ordersData || ordersData.length === 0) {
      return 0;
    }

    return ordersData.reduce((acc, current) => {
      return acc + current.price * current.qts;
    }, 0);
  };

  const checkoutPrice = calculateCheckoutPrice(ordersData);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="small"
          className="self-center px-4 gap-2"
        >
          <img className="w-8 h-8" src="/add2.svg" alt="add more" />
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="font-bold inline-flex rounded-full h-5 w-5 bg-orange-300 text-white justify-center">
              {ordersData && ordersData.length}
            </span>
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Order List</SheetTitle>
          <SheetDescription>All of your orders listed here</SheetDescription>
        </SheetHeader>
        <div className="uppercase font-semibold antialiased animate-in transition-transform duration-200 ease-in">
          <span>
            {checkoutList}
            Total Price : ${checkoutPrice}
          </span>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={() => navigate("/checkout", { replace: true })}
              type="submit"
            >
              Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
