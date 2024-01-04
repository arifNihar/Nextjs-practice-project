"use client";

import { getData } from "@/lib/getData";
import Newadjustment from "../../new/page";

export default async function Update({ params: { id } }) {
  let data = await getData(`adjustments/add/${id}`);
  let tab = "add";
  if (!data) {
    data = await getData(`adjustments/transfer/${id}`);
    tab = "transfer";
  }
  console.log("adjusment: ", data);
  return <Newadjustment initialdata={data} isUpdate={true} tab={tab} />;
}
