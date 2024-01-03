"use client";

import { getData } from "@/lib/getData";
import Newadjustment from "../../new/page";


export default async function Update({ params: { id } }) {
    const data = await getData(`adjustments/${id}`);
    console.log(data);
    return (
        <Newadjustment initialdata={data} isUpdate={true} />
    )
}
