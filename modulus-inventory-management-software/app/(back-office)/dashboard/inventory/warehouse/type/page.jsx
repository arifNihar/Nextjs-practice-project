"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function NewWarehouseType({ warehouse_types, initialdata = {}, isUpdate = {} }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialdata });
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const redirect = () => {
        router.push("/dashboard/inventory/warehouse");
    };

    const onSubmit = async (data) => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (isUpdate) {
            makePutRequest(
                setLoading,
                `${baseUrl}/api/warehouse/type/${initialdata.id}`,
                data,
                "Warehouse Type",
                redirect
            );
        } else {
            makePostRequest(setLoading, `${baseUrl}/api/warehouse/type`, data, 'Warehouse Type', reset);
        }
    }

    return (
        <div>
            <FormHeader title={isUpdate ? "Update Warehouse Type" : "New Warehouse Type"} href="/dashboard/inventory" />
            <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput
                            name="title"
                            label="Warehouse Type Name"
                            id="title"
                            type="text"
                            register={register}
                            isRequired={true}
                            placeholder="Type the Warehouse Type Name"
                            className="sm:col-span-2"
                            errors={errors}
                        />

                        <TextareaInput
                            name="description"
                            label="Warehouse Type Description"
                            id="description"
                            register={register}
                            isRequired={true}
                            className="sm:col-span-2"
                            errors={errors}
                        />
                    </div>
                    <SubmitButton isLoading={loading} title={isUpdate ? "Update Warehouse Type" : "New Warehouse Type"} />
                </form>
            </div >
        </div >
    )
}
