import React, { useContext, useMemo } from "react";
import { Button } from "./ui/button";
import DataContext from "./DataContext";
import { useToast } from "./ui/use-toast";

export default function Specials() {
  const { ordersData, setOrdersData } = useContext(DataContext);
  const { toast } = useToast();

  //this function should add orders into ordersData state, this function trigger when a use click on order button ?
  const saveDataInState = (data) => {
    setOrdersData((prevOrdersData) => {
      const existingItemIndex = prevOrdersData.findIndex(
        (item) => item.id === data.id,
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, create a new array with the updated item
        return prevOrdersData.map((item, index) =>
               index === existingItemIndex ? { ...item, qts: item.qts + 1 } : item
        );
      } else {
        // If the item does not exist, add the new item to the array
        return [...prevOrdersData, data];
      }
    });
  };

  //list of food for our Menu hardcoded for now
  const foodSpecialties = useMemo(
    () => [
      {
        name: "Sushi (Japan)",
        speciality: "Vinegared rice with various seafood and toppings",
        price: 18.99,
        image: "/Sushi.png",
        available: true,
        id: 1,
        qts: 1,
      },
      {
        name: "Pizza (Italy)",
        speciality:
          "Flatbread topped with tomato sauce, cheese, and various toppings",
        price: 12.5,
        image: "/Pizza.png",
        available: false,
        id: 2,
        qts: 1,
      },
      {
        name: "Tacos (Mexico)",
        speciality:
          "Small corn tortillas filled with meat, vegetables, and salsa",
        price: 8.95,
        image: "/Tacos.png",
        available: true,
        id: 3,
        qts: 1,
      },
      {
        name: "Pad Thai (Thailand)",
        description:
          "Stir-fried rice noodles with vegetables, egg, and protein",
        price: 15.75,
        image: "/Pad_Thai.png",
        available: true,
        id: 4,
        qts: 1,
      },
      {
        name: "Jerk Chicken (Jamaica)",
        description:
          "Spicy chicken marinated in a blend of allspice, thyme, Scotch bonnet peppers, and other seasonings",
        price: 16.25,
        image: "/Jerk_Chicken.png",
        available: true,
        id: 5,
        qts: 1,
      },
      {
        name: "Poutine (Canada)",
        description: "French fries topped with cheese curds and gravy",
        price: 9.95,
        image: "/Poutine.webp",
        available: true,
        id: 6,
        qts: 1,
      },
      {
        name: "Baklava (Greece)",
        description:
          "Layered pastry filled with chopped nuts and sweetened with syrup",
        price: 7.5,
        image: "/Baklava.png",
        available: true,
        id: 7,
        qts: 1,
      },
      {
        name: "Bangers and Mash (England)",
        description: "Sausages served with mashed potatoes",
        price: 14.75,
        image: "/Bangers.png",
        available: true,
        id: 8,
        qts: 1,
      },
    ],
    [],
  );

  //maping over the list food and list them as card in front-end
  //problem there is a delay on Onclick function, consol log return first click empty second click the first click
  const myspecialities = foodSpecialties.map((Specials, index) => {
    return (
      <div
        key={index + 1}
        className="grid grid-rows-[1fr_auto_auto_auto] gap-4 ~p-1/4 shadow border-8 border-white rounded-md"
      >
        <div className="h-fit">
          <img
            className="rounded-md object-cover w-full h-full"
            src={Specials.image}
            alt={`${Specials.name} Dishes`}
          />
        </div>
        <div className="flex flex-col justify-between h-fit">
          <h3 className="font-semibold text-left">{Specials.name} </h3>
          <p className="m-2 text-gray-500 text-left">{Specials.description}</p>
        </div>
        <span className="self-center font-bold text-center">
          ${Specials.price}
        </span>
        {Specials.available ? (
          <Button
            onClick={() => {
              toast({
                title: "Your Order Add to Cart",
                description: "Check Your Cart For More Info",
              });
              saveDataInState(Specials);
            }}
            variant="outline"
            size="small"
            className="self-center bg-yellow-300"
          >
            <img className="w-8 h-8" src="/add2.svg" alt="" />
            Order
          </Button>
        ) : (
          <Button
            disabled
            variant="outline"
            size="small"
            className="self-center bg-gray-300"
          >
            <img className="w-8 h-8" src="/add2.svg" alt="" />
            Out of Stock
          </Button>
        )}
      </div>
    );
  });

  return (
    <DataContext.Provider value={ordersData}>
      <div className=" ~mt-5/10 ~mb-5/10" id="menu">
        <h2 className="~text-4xl/7xl font-bold ~mb-5/10 ">
          <span className="underline underline-offset-4 decoration-yellow-400 ~ml-4/10">
            Our
          </span>{" "}
          Menu
        </h2>
        <ul className="container grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 bg-slate-50 p-4">
          {myspecialities ? myspecialities : <span>Dish Not Found</span>}
        </ul>
      </div>
    </DataContext.Provider>
  );
}
