"use client";

import { getData } from "@/lib/getData";
import NewCategory from "../../new/page";


export default async function Update({ params: { id } }) {
    const data = await getData(`categories/${id}`);
    return (
        <NewCategory initialdata={data} isUpdate={true} />
    )
}
