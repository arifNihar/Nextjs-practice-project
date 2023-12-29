"use client";

const TextInput = ({
    name,
    label,
    id,
    type = "text",
    register,
    isRequired = false,
    placeholder,
    className = "sm:col-span-2",
    errors,
}) => {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-800"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                {...register(name, { required: isRequired })}
                autoComplete={name}
                placeholder={placeholder}
                className="block w-full py-2 text-gray-800 border-0 rounded-md shadow-sm placeholder:text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            />
            {errors.title && (
                <span className="text-sm text-red-600">{label} is required.</span>
            )}
        </div>
    );
};

export default TextInput;
