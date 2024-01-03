"use client";

import { getData } from "@/lib/getData";
import NewWarehouseType from "../../page";


export default async function Update({ params: { id } }) {
    const data = await getData(`warehouse/type/${id}`);
    return (
        <NewWarehouseType initialdata={data} isUpdate={true} />
    )
}