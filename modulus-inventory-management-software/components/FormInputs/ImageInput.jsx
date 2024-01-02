
import { UploadDropzone } from '@/lib/uploadthing';
import Image from 'next/image';
import { Pencil } from 'lucide-react';

export default function ImageInput({ label, className = "col-span-full", imageUrl = "", setImageUrl, endpoint = "imageUploader" }) {
    console.log(imageUrl);
    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-800">
                    {label}
                </label>
                {imageUrl && (
                    <button
                        onClick={() => setImageUrl("")}
                        type="button"
                        className="flex px-4 py-2 space-x-2 bg-indigo-600 rounded-sm shadow text-slate-50">
                        <Pencil className="w-5 h-5" />
                        <span>Change Image</span>
                    </button>
                )}
            </div>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt="Item Image"
                    width={1000}
                    height={700}
                    className="object-cover w-full h-64 rounded-md"
                />
            ) : (
                <UploadDropzone
                    endpoint={endpoint}
                    onClientUploadComplete={
                        (res) => {
                            // Do something with the response
                            setImageUrl(res[0].url);
                            console.log("Files: ", res[0].url);
                            console.log("Upload Completed");
                        }}
                    onUploadError={(error) => {
                        // Do something with the error.
                        console.log(`ERROR! ${error.message}`);
                    }}
                />
            )}
        </div>
    )
}
