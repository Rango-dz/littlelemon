import Header from "./compononets/Header";
import Footer from "./compononets/Footer";
import { useState } from "react";

export default function Checkout() {
  const [orderList, setOrderList] = useState(() => {
    const savedData = localStorage.getItem("littleLemon");
    return savedData ? JSON.parse(savedData) : [];
  });

  const renderCheckoutList = (orderList) => {
    if (orderList.length === 0) {
      return "Cart is Empty";
    }

    return orderList.map((item) => (
      <div key={item.id} className="flex flex-row">
        <img src={item.image} className="w-10 h-10" />
        <div>{item.name}</div>
        <div className="flex mx-2">
          <input
            type="number"
            value={item.qts}
            placeholder={item.qts}
            className="border"
          ></input>
          <div className="flex flex-col">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div>${item.qts * item.price}</div>
      </div>
    ));
  };

  const checkoutList = renderCheckoutList(orderList);

  return (
    <div className="grid grid-flow-row justify-stretch">
      <Header />
      <main className="container ~mt-5/10 px-3 py-5 bg-light text-center mx-auto">
        {checkoutList}
      </main>
      <Footer />
    </div>
  );
}
