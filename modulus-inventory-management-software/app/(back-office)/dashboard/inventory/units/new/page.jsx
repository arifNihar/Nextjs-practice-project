"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";


export default function NewUnit() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        const baseUrl = "http://localhost:3000";
        makePostRequest(setLoading, `${baseUrl}/api/units`, data, 'Unit', reset);
    }

    return (
        <div>
            <FormHeader title="New Unit" href="/dashboard/inventory" />
            <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput
                            name="title"
                            label="Unit Name"
                            id="title"
                            type="text"
                            register={register}
                            isRequired={true}
                            placeholder="Type the Unit Name"
                            className="w-full"
                            errors={errors}
                        />
                        <TextInput
                            name="abbreviation"
                            label="Unit Abbreviation"
                            id="abbreviation"
                            type="text"
                            register={register}
                            isRequired={true}
                            placeholder="Type the Unit abbreviation"
                            className="w-full"
                            errors={errors}
                        />
                    </div>
                    <SubmitButton isLoading={loading} title="Unit" />
                </form>
            </div >
        </div >
    )
}
