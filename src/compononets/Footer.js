import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-950 ~p-5/10 place-content-center justify-center h-full border-t-8 ~mt-10/20 border-yellow-300 bottom-0 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center w-full ~text-base/xl text-white">
      <div>
        <img
          src="/logo192.svg"
          alt="Little Lemon logo"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <nav aria-label="Footer navigation">
        <ul className="flex flex-col justify-start items-start">
          <li>
            <Link rel="stylesheet" href="/"
            aria-label="About Us">
              About Us
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="/"
            aria-label="Contact Us">
              Contact Us
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="/"
            aria-label="Privacy Policy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="/"
            aria-label="Terms of Service">
              Terms of Service
            </Link>
          </li>
        </ul>
      </nav>
      <section aria-label="Social media links">
        <ul className="flex flex-col justify-start items-start">
          <li>
            <Link rel="stylesheet" href="/"
            aria-label="Facebook">
              Facebook
            </Link>
          </li>
          <li>
            {" "}
            <Link rel="stylesheet" href="/"
            aria-label="Twitter">
              Twitter
            </Link>
          </li>
          <li>
            {" "}
            <Link rel="stylesheet" href="/"
            aria-label="Instagram">
              Instagram
            </Link>
          </li>
          <li>
            {" "}
            <Link rel="stylesheet" href="/"
            aria-label="LinkedIn">
              LinkedIn
            </Link>
          </li>
          <li>
            {" "}
            <Link rel="stylesheet" href="/"
            aria-label="YouTube">
              YouTube
            </Link>
          </li>
          <li>
            {" "}
            <Link rel="stylesheet" href="/"
            aria-label="GitHub">
              GitHub
            </Link>
          </li>
        </ul>
      </section>
      <section aria-label="Newsletter subscription"  className="flex flex-col gap-5 ~text-base/xl">
        <h3>Stay Tuned For latest Dish's from Little Lemon</h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" required
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </section>
    </footer>
  );
}
