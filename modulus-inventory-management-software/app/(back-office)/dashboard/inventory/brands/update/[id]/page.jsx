"use client";

import { getData } from "@/lib/getData";
import NewBrand from "../../new/page";

export default async function Update({ params: { id } }) {
    const data = await getData(`brands/${id}`);
    return (
        <NewBrand initialdata={data} isUpdate={true} />
    )
}
