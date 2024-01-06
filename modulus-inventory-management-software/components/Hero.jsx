import Themelink from "./Themelink";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import inventoryImg from "../public/inventoryImg.png";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default function Hero() {
  const session = getServerSession(authOptions);
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 text-center bg-gradient-to-b from-indigo-700 md:py-32 md:px-16 text-slate-50">
      <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-4xl font-bold md:text-4xl">
          Inventory management software for growing businesses.
        </h2>
        <p className="text-base md:text-xl">
          Increase your sales and keep track of every unit with our powerful
          stock management, order fulfillment, and inventory control software.
        </p>
        <div className="flex items-center py-4 space-x-4">
          {session ? (
            <Themelink
              className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
              title="View Dashboard"
              href="/dashboard/home/overview"
              icon={AiOutlineArrowDown}
            />
          ) : (
            <Themelink
              className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
              title="Access the System"
              href="/dashboard/home/overview"
              icon={AiOutlineArrowDown}
            />
          )}

          <Themelink
            className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-gray-300"
            title="Explore Demo Account"
            href="/dashboard/home/overview"
            icon={AiOutlineArrowDown}
          />
        </div>
      </div>
      <div className="">
        <Image src={inventoryImg} alt="Inventory Image" />
      </div>
    </div>
  );
}
