import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <section className="bg-gray-50 header-bg dark:bg-gray-900 bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center px-10 py-5 mb-6 text-2xl font-semibold text-gray-900 bg-indigo-800 rounded-lg shadow shadow-lg dark:text-white"
        >
          <img className="h-12 mr-2 w-18" src="./logo.webp" alt="logo" />
          <span className="text-white">Inventory Manegment System</span>
        </a>
        <div className="w-full bg-white rounded-lg shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
