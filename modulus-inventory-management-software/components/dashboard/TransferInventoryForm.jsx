"use client";

import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import { makePostRequest } from "@/lib/apiRequest";


export default function TransferInventoryForm({ warehouses, items }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        const baseUrl = "http://localhost:3000";
        makePostRequest(setLoading, `${baseUrl}/api/adjustments/transfer`, data, 'Transfer Adjusment', reset);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput
                    name="reference_number"
                    label="Enter reference number of stock"
                    id="reference_number"
                    type="text"
                    register={register}
                    isRequired={true}
                    placeholder="Type the reference number of stock"
                    className="sm:col-span-2"
                    errors={errors}
                />
                <TextInput
                    name="transfer_stock"
                    label="Enter quantity of stock to transfer"
                    id="transfer_stock"
                    type="number"
                    register={register}
                    isRequired={true}
                    placeholder="Type the quantity of stock to transfer"
                    className="w-full"
                    errors={errors}
                />
                <SelectInput
                    name="giving_warehouse_id"
                    label="Select the warehouse that will give the stock"
                    id="giving_warehouse_id"
                    register={register}
                    isRequired={false}
                    className="w-full"
                    errors={errors}
                    options={warehouses}
                />
                <SelectInput
                    name="recieving_warehouse_id"
                    label="Select the branch that will receive the stock"
                    id="recieving_warehouse_id"
                    register={register}
                    isRequired={false}
                    className="w-full"
                    errors={errors}
                    options={warehouses}
                />
                <SelectInput
                    name="item_id"
                    label="Select the Item that will receive the stock"
                    id="item_id"
                    register={register}
                    isRequired={false}
                    className="w-full"
                    errors={errors}
                    options={items}
                />
                <TextareaInput
                    name="adjustment_note"
                    label="adjustment Notes"
                    id="adjustment_note"
                    register={register}
                    isRequired={true}
                    className="sm:col-span-2"
                    errors={errors}
                />
            </div>
            <SubmitButton isLoading={loading} title="Adjustment" />
        </form>
    )
}

