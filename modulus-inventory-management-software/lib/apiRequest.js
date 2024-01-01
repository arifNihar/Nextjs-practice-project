import { toast } from "react-hot-toast";

export async function makePostRequest(setLoading, url, data, message, reset) {

    try {
        setLoading(true);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            setLoading(false);
            toast.success(`New ${message} save Successfully!`);
            reset();
        } else {
            setLoading(false);
            toast.error('OOPs, Sorry. Something is wrong here.');
        }
    } catch (error) {
        setLoading(false);
        toast.error('OOPs, Sorry. Something is wrong here.');
        console.log(error);
    }
}