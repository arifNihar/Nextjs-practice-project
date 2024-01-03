"use client";

import { getData } from "@/lib/getData";
import NewWarehouse from "../../new/page";


export default async function Update({ params: { id } }) {
    const data = await getData(`warehouse/${id}`);
    return (
        <NewWarehouse initialdata={data} isUpdate={true} />
    )
}