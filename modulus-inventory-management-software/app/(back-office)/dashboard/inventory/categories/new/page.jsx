"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";

export default function NewCategory() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <FormHeader title="New Category" href="#" />
            <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput
                            name="title"
                            label="Category Name"
                            id="title"
                            type="text"
                            register={register}
                            isRequired={true}
                            placeholder="Type the Category Name"
                            className="sm:col-span-2"
                            errors={errors}
                        />
                        <TextareaInput
                            name="description"
                            label="Category Description"
                            id="description"
                            register={register}
                            isRequired={true}
                            className="sm:col-span-2"
                            errors={errors}
                        />
                    </div>
                    <SubmitButton isLoading={loading} title="Category" />
                </form>
            </div >
        </div >
    )
}
