"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import { makePostRequest } from "@/lib/apiRequest";

export default function WarehouseForm({ warehouse_types }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        const baseUrl = "http://localhost:3000";
        makePostRequest(setLoading, `${baseUrl}/api/warehouse`, data, 'Warehouse', reset);
    }

    return (

        <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        name="title"
                        label="Warehouse Name"
                        id="title"
                        type="text"
                        register={register}
                        isRequired={true}
                        placeholder="Type the Warehouse Name"
                        className="w-full"
                        errors={errors}
                    />
                    <SelectInput
                        name="type"
                        label="Select Warehouse Type"
                        id="type"
                        register={register}
                        isRequired={false}
                        className="w-full"
                        errors={errors}
                        options={warehouse_types}
                    />
                    <TextInput
                        name="location"
                        label="Warehouse Location"
                        id="location"
                        type="text"
                        register={register}
                        isRequired={true}
                        placeholder="Type the Warehouse location"
                        className="w-full"
                        errors={errors}
                    />
                    <TextareaInput
                        name="description"
                        label="Warehouse Description"
                        id="description"
                        register={register}
                        isRequired={true}
                        className="sm:col-span-2"
                        errors={errors}
                    />
                </div>
                <SubmitButton isLoading={loading} title="Warehouse" />
            </form>
        </div >
    )
}