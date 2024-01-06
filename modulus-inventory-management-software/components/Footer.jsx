"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <a
          href="/"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Inventory
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Increase your asales and keep track of every unit with out powerful
          stock management, order fulfillment, and inventory control software.
          This was made By{" "}
          <span className="font-semibold text-indigo-500">
            <Link href="https://modulussolutions.vercel.app/">
              Modulus.Solutions
            </Link>
          </span>{" "}
          Software Company
        </p>
        <ul className="flex items-center justify-center mb-6 text-gray-900 flex-warp dark:text-white">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              Premium
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              Campaingns
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              Affiliate Program
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline-none hover:text-indigo-500 md:mr-6"
            >
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            Inventory
          </a>
          . All Rights Reversed.
        </span>
      </div>
    </footer>
  );
}
