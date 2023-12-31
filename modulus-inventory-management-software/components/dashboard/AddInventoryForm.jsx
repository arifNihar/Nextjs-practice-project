"use client";

import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { config } from "@/lib/config";

export default function AddInventoryForm({
  warehouses,
  items,
  suppliers,
  initialdata = {},
  isUpdate = false,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialdata });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirect = () => {
    router.push("/dashboard/inventory/adjustments");
  };

  const onSubmit = async (data) => {
    const baseUrl =
      config.apiPrefix +
      config.apiHost +
      "/api/adjustments/add/" +
      initialdata.id;
    if (isUpdate) {
      makePutRequest(setLoading, baseUrl, data, "Add Adjusment", redirect);
    } else {
      const baseUrl =
        config.apiPrefix + config.apiHost + "/api/adjustments/add";
      makePostRequest(setLoading, baseUrl, data, "Add Adjusment", reset);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
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
          name="add_stock"
          label="Enter quantity of stock to add"
          id="add_stock"
          type="number"
          register={register}
          isRequired={true}
          placeholder="Type the quantity of stock to add"
          className="w-full"
          errors={errors}
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

        <SelectInput
          name="recieving_warehouse_id"
          label="Select the warehouse that will receive the stock"
          id="recieving_warehouse_id"
          register={register}
          isRequired={false}
          className="w-full"
          errors={errors}
          options={warehouses}
        />
        <SelectInput
          name="supplier_id"
          label="Select the Supplier"
          id="supplier_id"
          register={register}
          isRequired={false}
          className="w-full"
          errors={errors}
          options={suppliers}
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
      <SubmitButton
        isLoading={loading}
        title={isUpdate ? "Update Adjusment" : "New Adjusment"}
      />
    </form>
  );
}
