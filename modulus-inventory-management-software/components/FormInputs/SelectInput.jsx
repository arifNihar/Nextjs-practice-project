import React from 'react'

export default function SelectInput({
    name,
    label,
    id,
    register,
    isRequired = false,
    className = "sm:col-span-2",
    errors,
    options = [],
}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium leading-6 text-gray-800"
            >
                {label}
            </label>
            <select
                id={id}
                name={name}
                {...register(name, { required: isRequired })}
                autoComplete={name}
                className="block w-full py-2 text-gray-800 border-0 rounded-md shadow-sm placeholder:text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            >
                {options.map((data, i) => (
                    <option key={i} value={data.value}>{data.label}</option>
                ))}

            </select>
            {errors.title && isRequired && (
                <span className="text-sm text-red-600">{label} is required.</span>
            )}
        </div>
    )
}
