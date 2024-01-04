"use client";

import { getData } from "@/lib/getData";
import NewItem from "../../new/page";


export default async function Update({ params: { id } }) {
    const data = await getData(`items/${id}`);

    return (
        <NewItem initialdata={data} isUpdate={true} />
    )
}
