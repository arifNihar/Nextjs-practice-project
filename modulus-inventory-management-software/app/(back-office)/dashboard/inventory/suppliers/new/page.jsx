"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { config } from "@/lib/config";

export default function Newsupplier({ initialdata = {}, isUpdate = false }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialdata });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirect = () => {
    router.push("/dashboard/inventory/suppliers");
  };
  const onSubmit = async (data) => {
    if (isUpdate) {
      const baseUrl =
        config.apiPrefix + config.apiHost + "/api/suppliers/" + initialdata.id;
      makePutRequest(setLoading, baseUrl, data, "Supplier", redirect);
    } else {
      const baseUrl = config.apiPrefix + config.apiHost + "/api/suppliers";
      makePostRequest(setLoading, baseUrl, data, "Supplier", reset);
    }
  };

  return (
    <div>
      <FormHeader
        title={isUpdate ? "Update Supplier" : "New Supplier"}
        href="/dashboard/inventory"
      />
      <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              name="name"
              label="Supplier Name"
              id="name"
              type="text"
              register={register}
              isRequired={true}
              placeholder="Type the supplier Name"
              className="w-full"
              errors={errors}
            />
            <TextInput
              name="phone"
              label="Supplier Phone Number"
              id="phone"
              type="text"
              register={register}
              isRequired={true}
              placeholder="Type the supplier phone number"
              className="w-full"
              errors={errors}
            />
            <TextInput
              name="email"
              label="Supplier Email"
              id="email"
              type="email"
              placeholder="Type the supplier email"
              register={register}
              isRequired={true}
              className="w-full"
              errors={errors}
            />
            <TextInput
              name="contact_person"
              label="Supplier contact person"
              id="contact_person"
              type="text"
              placeholder="Type the supplier contact person"
              register={register}
              isRequired={false}
              className="w-full"
              errors={errors}
            />
            <TextInput
              name="address"
              label="Supplier Address"
              id="address"
              type="text"
              placeholder="Type the supplier address"
              register={register}
              isRequired={true}
              className="w-full"
              errors={errors}
            />
            <TextInput
              name="supplier_code"
              label="Supplier Code"
              id="supplier_code"
              type="text"
              placeholder="Type the supplier code"
              register={register}
              isRequired={true}
              className="w-full"
              errors={errors}
            />
            <TextInput
              name="taxt_id"
              label="Supplier TIN"
              id="taxt_id"
              type="text"
              placeholder="Type the supplier taxt id"
              register={register}
              isRequired={true}
              className="sm:col-span-2"
              errors={errors}
            />
            <TextareaInput
              name="payment_terms"
              label="Payment Terms"
              id="payment_terms"
              register={register}
              isRequired={true}
              className="sm:col-span-2"
              errors={errors}
            />
            <TextareaInput
              name="supplier_note"
              label="Supplier Notes"
              id="supplier_note"
              register={register}
              isRequired={true}
              className="sm:col-span-2"
              errors={errors}
            />
          </div>
          <SubmitButton
            isLoading={loading}
            title={isUpdate ? "Update Supplier" : "New Supplier"}
          />
        </form>
      </div>
    </div>
  );
}
