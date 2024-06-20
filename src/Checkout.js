import Header from "./compononets/Header";
import Footer from "./compononets/Footer";
import React, { useContext, useEffect, useReducer } from "react";
import { Button } from "./compononets/ui/button";
import { useNavigate } from "react-router-dom";
import DataContext from "./compononets/DataContext";

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  REMOVEITEM: 'REMOVEITEM',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload.item) {
          return { ...item, qts: item.qts + 1 };
        }
        return item;
      });
    case ACTIONS.DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload.item) {
          return { ...item, qts: item.qts - 1 };
        }
        return item;
      });
    case ACTIONS.REMOVEITEM:
      return state.filter((_, index) => index !== action.payload.index);
    default:
      return state;
  }
}

export default function Checkout() {
  const { ordersData, setOrdersData } = useContext(DataContext);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, ordersData);

  useEffect(() => {
    setOrdersData(state);
  }, [state, setOrdersData]);

  const renderCheckoutList = (orderList) => {
    if (orderList.length === 0) {
      return "Cart is Empty";
    }

    return orderList.map((item, index) => (
      <div key={index} className="flex flex-row w-full justify-between align-middle text-center">
        <img src={item.image} alt="success" className="w-10 h-10" />
        <div>{item.name}</div>
        <div className="flex mx-2">
          <input
            type="number"
            value={item.qts}
            placeholder={item.qts}
            className="border"
            readOnly
          ></input>
          <div className="flex flex-col">
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: { item: item.id } })}>+</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: { item: item.id } })}>-</button>
          </div>
        </div>
        <div>$ {parseFloat(parseFloat(item.qts * item.price).toFixed(2))}</div>
        <button onClick={() => dispatch({ type: ACTIONS.REMOVEITEM, payload: { index: index } })}>Remove</button>
      </div>
    ));
  };

  const checkoutList = state.length === 0 ? "Cart is Empty" : renderCheckoutList(state);

  const calculateCheckoutPrice = (orderList) => {
    if (!orderList || orderList.length === 0) {
      return 0;
    }

    return orderList.reduce((acc, current) => {
      return acc + current.price * current.qts;
    }, 0);
  };

  const checkoutPrice = calculateCheckoutPrice(state);

  const clearStorage = () => {
    localStorage.clear();
    setOrdersData([]);
  };

  return (
    <div className="grid grid-flow-row justify-stretch">
      <Header />
      <main className="container ~mt-5/10 px-3 py-5 bg-light text-center mx-auto">
        <div className="flex flex-col">
          <div>{checkoutList}</div>
          <div className="flex justify-end font-bold">Total price: ${parseFloat(checkoutPrice).toFixed(2)}</div>
          <Button onClick={() => { navigate("/success", { replace: true }); clearStorage(); }} type="submit">Checkout</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
