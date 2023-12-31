"use client";

import { useForm } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { config } from "@/lib/config";

export default function CreateItemForm({
  categories,
  brands,
  units,
  warehouses,
  suppliers,
  initialdata = {},
  isUpdate = false,
}) {
  const router = useRouter();
  const redirect = () => {
    router.push("/dashboard/inventory/items");
  };
  const [imageUrl, setImageUrl] = useState("" || initialdata?.imageUrl);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialdata });

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    if (isUpdate) {
      const baseUrl =
        config.apiPrefix + config.apiHost + "/api/items/" + initialdata.id;
      if (imageUrl !== "") {
        data.imageUrl = imageUrl;
      }
      makePutRequest(setLoading, baseUrl, data, "Item", redirect);
      setImageUrl("");
    } else {
      const baseUrl = config.apiPrefix + config.apiHost + "/api/items";
      data.imageUrl = imageUrl;
      makePostRequest(setLoading, baseUrl, data, "Item", reset);
      setImageUrl("");
    }
  };
  return (
    <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Item Name"
            id="title"
            type="text"
            register={register}
            isRequired={true}
            placeholder="Type the Item Name"
            className="w-full"
            errors={errors}
          />
          <SelectInput
            name="category_id"
            label="Select Item Category Type"
            id="category_id"
            register={register}
            isRequired={false}
            className="w-full"
            errors={errors}
            options={categories}
          />
          <TextInput
            name="sku"
            label="Item SKU"
            id="sku"
            type="text"
            placeholder="Type the Item SKU"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
          />
          <TextInput
            name="barcode"
            label="Item Barcode"
            id="barcode"
            type="text"
            placeholder="Type the Item barcode"
            register={register}
            isRequired={false}
            className="w-full"
            errors={errors}
          />
          <TextInput
            name="qty"
            label="Item Quantity"
            id="qty"
            type="number"
            placeholder="Type the Item quantity"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
          />
          <SelectInput
            name="unit_id"
            label="Select Item Unit Type"
            id="unit_id"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
            options={units}
          />
          <SelectInput
            name="brand_id"
            label="Select Item Brand"
            id="brand_id"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
            options={brands}
          />
          <TextInput
            name="buying_price"
            label="Buying Price"
            id="buying_price"
            type="number"
            placeholder="Type the Item buying price"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
          />
          <TextInput
            name="selling_price"
            label="Selling Price"
            id="selling_price"
            type="number"
            placeholder="Type the Item selling price"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
          />
          <SelectInput
            name="supplier_id"
            label="Select Item supplier"
            id="supplier_id"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
            options={suppliers}
          />

          <TextInput
            name="reorder_point"
            label="Re-Order Point"
            id="reorder_point"
            type="number"
            placeholder="Type the Item reorder point"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
          />
          <SelectInput
            name="warehouse_id"
            label="Select Item warehouse"
            id="warehouse_id"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
            options={warehouses}
          />
          <TextInput
            name="item_weight"
            label="Item weight in Kgs"
            id="item_weight"
            type="number"
            placeholder="Type the Item weight in Kgs"
            register={register}
            isRequired={false}
            className="w-full"
            errors={errors}
          />
          <TextInput
            name="item_dimension"
            label="Item Dimension in cm (20 x 30 x 100)"
            id="item_dimension"
            type="text"
            placeholder="Type the Item dimension"
            register={register}
            isRequired={false}
            className="w-full"
            errors={errors}
          />
          <TextInput
            name="tax_rate"
            label="Item Tax Rate in %"
            id="tax_rate"
            type="number"
            placeholder="Type the Item tax rate"
            register={register}
            isRequired={true}
            className="w-full"
            errors={errors}
          />
          <ImageInput
            label="Item Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
          <TextareaInput
            name="description"
            label="Item Description"
            id="description"
            register={register}
            isRequired={true}
            className="sm:col-span-2"
            errors={errors}
          />
          <TextareaInput
            name="item_note"
            label="Item Notes"
            id="item_note"
            register={register}
            isRequired={true}
            className="sm:col-span-2"
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Update Item" : "New Item"}
        />
      </form>
    </div>
  );
}
