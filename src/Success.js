import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./compononets/ui/button"

export default function Success() {
  const location = useLocation();
  console.log("location", location.state);

  const keys =
    location.state && typeof location.state === "object" && !Array.isArray(location.state)
      ? Object.keys(location.state)
      : [];

  return (
    <div className="bg-yellow-50 w-full h-full flex justify-center items-center">
      <div className="flex justify-between items-center h-screen gap-20">
        <div className="bg-white p-10 rounded-lg shadow-lg border-10 border-white">
          <img
            src="/success.svg"
            alt="success"
            className="w-32 h-32 mx-auto rounded-full fill-yellow-500 mb-5"
          />
          <h1 className="text-5xl font-bold text-green-400 text-center mb-10">
            Success!
          </h1>
          <p className="text-gray-700 font-semibold flex flex-col items-center gap-3">
            {keys.length > 0 && keys.map((key) => (
              <span key={key}>{key}: {typeof location.state[key] === "object" ? location.state[key].toLocaleDateString() : location.state[key]}</span>
            ))}
          </p>
          <Link
            to="/"
            className="block text-center text-gray-500 mt-20"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:text-gray-900 w-full">
              Go back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
