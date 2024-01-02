"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function NewBrand({ initialdata = {}, isUpdate = false }) {
    const router = useRouter();
    const redirect = () => {
        router.push("/dashboard/inventory/brands");
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: initialdata });
    const [loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        const baseUrl = "http://localhost:3000";
        if (isUpdate) {
            makePutRequest(setLoading, `${baseUrl}/api/brands/${initialdata.id}`, data, "Brand", redirect);
        } else {
            makePostRequest(setLoading, `${baseUrl}/api/brands`, data, "Brand", reset);
        }
    };

    return (
        <div>
            <FormHeader
                title={isUpdate ? "Update Brand" : "New Brand"}
                href="/dashboard/inventory"
            />
            <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput
                            name="title"
                            label="Brand Name"
                            id="title"
                            type="text"
                            register={register}
                            isRequired={true}
                            placeholder="Type the Brand Name"
                            className="w-full"
                            errors={errors}
                        />
                    </div>
                    <SubmitButton
                        isLoading={loading}
                        title={isUpdate ? "Update Brand" : "New Brand"}
                    />
                </form>
            </div>
        </div>
    );
}
