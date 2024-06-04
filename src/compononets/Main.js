import React from "react";

export default function Main({ children }) {
  return (
    <main className="container ~mt-5/1  0 px-3 py-5 bg-light text-center mx-auto">
      {children}
    </main>
  );
}
