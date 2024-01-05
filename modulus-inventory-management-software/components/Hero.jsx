import Themelink from "./Themelink";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import inventoryImg from "../public/inventoryImg.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 mt-10 text-center bg-indigo-700 md:py-16 md:px-16 text-slate-50">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold md:text-4xl">
          Inventory management software for growing businesses.
        </h2>
        <p className="text-base md:text-xl">
          Increase your sales and keep track of every unit with our powerful
          stock management, order fulfillment, and inventory control software.
        </p>
        <Themelink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
          title="View Dashboard"
          href="/dashboard/home/overview"
          icon={AiOutlineArrowDown}
        />
      </div>
      <div className="">
        <Image src={inventoryImg} alt="Inventory Image" />
      </div>
    </div>
  );
}
