import React from "react";
import { Button } from "./ui/button";
import { HashLink } from "react-router-hash-link";

export default function HeroHome() {
  return (
    <div className="bg-[#495E57] grid md:grid-cols-2 md:p-8 justify-center align-middle ~m-4/8 rounded-md">
      <div className="w-full scroll-m-20 grid grid-flow-row gap-2 md:gap-5 lg:gap-7 px-5 lg:px-10 py-8 mx-auto justify-center align-middle place-content-center">
        <h2 className="md:pb-0 ~text-3xl/5xl font-semibold tracking-tight first:mt-0 underline decoration-yellow-300 decoration-2 underline-offset-2 animate-in translate-x-5 transition-all duration-500 ease-in-in text-white">
          Chicago
        </h2>
        <h1 className="~text-5xl/8xl font-bold tracking-tight text-yellow-300 animate-in translate-x-5 transition-all duration-500 ease-in-in">
          Little Lemon
        </h1>
        <p className="prose md:py-0 text-white ~text-xl/2xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          aperiam exercitationem assumenda dolore sit atque, iure doloribus
          sequi qui quo maiores laborum pariatur itaque eveniet maxime quos
          obcaecati dignissimos veniam.
        </p>
        <HashLink to="/#menu">
          <Button
            variant="outline"
            className="bg-yellow-300 text-black ~text-base/2xl ~px-4/8 ~py-4/8 ~w-40/80 mt-5 hover:bg-yellow-400 border-yellow-300"
          >
            Order Now
          </Button>
        </HashLink>
      </div>
      <div className="w-full md:order-1 scroll-m-20 grid grid-flow-row justify-center p-4 py-8">
        <div className="md:block hidden rounded-md  bg-cover">
          <img
            className="bg-cover w-full h-full object-cover rounded-md"
            src="/humberger.png"
            alt="humberger"
          />
        </div>
      </div>
    </div>
  );
}
