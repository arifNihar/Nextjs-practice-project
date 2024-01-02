"use client";

import { getData } from "@/lib/getData";
import Newsupplier from "../../new/page";


export default async function Update({ params: { id } }) {
    const data = await getData(`suppliers/${id}`);
    return (
        <Newsupplier initialdata={data} isUpdate={true} />
    )
}
