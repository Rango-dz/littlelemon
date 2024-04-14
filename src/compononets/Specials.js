import React from 'react'

export default function Specials() {

    const foodSpecialties = [
        {
          name: "Sushi (Japan)",
          speciality: "Vinegared rice with various seafood and toppings",
          price: 18.99
        },
        {
          name: "Pizza (Italy)",
          speciality: "Flatbread topped with tomato sauce, cheese, and various toppings",
          price: 12.50
        },
        {
          name: "Tacos (Mexico)",
          speciality: "Small corn tortillas filled with meat, vegetables, and salsa",
          price: 8.95
        },
        {
          name: "Pad Thai (Thailand)",
          speciality: "Stir-fried rice noodles with vegetables, egg, and protein",
          price: 15.75
        },
        {
          name: "Jerk Chicken (Jamaica)",
          speciality: "Spicy chicken marinated in a blend of allspice, thyme, Scotch bonnet peppers, and other seasonings",
          price: 16.25
        },
        {
          name: "Poutine (Canada)",
          speciality: "French fries topped with cheese curds and gravy",
          price: 9.95
        },
        {
          name: "Baklava (Greece)",
          speciality: "Layered pastry filled with chopped nuts and sweetened with syrup",
          price: 7.50
        },
        {
          name: "Bangers and Mash (England)",
          speciality: "Sausages served with mashed potatoes",
          price: 14.75
        },
        {
          name: "Pho (Vietnam)",
          speciality: "Broth noodle soup with meat, herbs, and vegetables",
          price: 11.95
        },
        {
          name: "Paella (Spain)",
          speciality: "Rice dish with seafood, chicken, vegetables, and saffron",
          price: 22.50
        }
      ];
      
      
      const myspecialities = foodSpecialties.map((Specials, index) => {
        return (
            <div key={index + 1} className=' grid grid-cols-4 p-4 shadow border-8 border-white rounded-md'>
            <img className='align-middle self-center rounded-md pr-4' src="/download.jpeg" alt="" />
            <div>
            <h3 className='font-semibold'>{Specials.name} :</h3> 
            <p className='m-2 '>{Specials.speciality}</p>
            </div>
            <span className='self-center font-bold text-center'>${Specials.price}</span>
            <div className=''><img className='w-16 h-16' src="/add2.svg" alt="" /></div>
            </div>
        )
    })
    console.log(myspecialities);
  return (
    <>
        <ul className='grid grid-flow-row justify-start gap-5 bg-slate-50 p-4'>
           { myspecialities }
        </ul>
    </>
  )
}
