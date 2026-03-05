import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const VerifyEmail = () => {

    const route = useRouter();
    
    const searchParams = useSearchParams();

    const token = searchParams.get('token');
    const email = searchParams.get('email');

    const linkClicked = async () => {

        if (!token) return;

        let url = "http://localhost:5067/api/auth/verify-email";

        try {
            const response = await axios.post(url, {email: email, token: token}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === "success"){
                route.push("/signin");
            }
        } catch (error) {
            console.log("Error sending data: ", error);
        }
    }

    return ( 
        <>
        <section className="h-screen w-full sm:p-20 p-10">
            <div className="h-max w-full flex gap-3">
                <p>Click the link to verify your email address</p>
                <button onClick={linkClicked} type="button" className="text-primary">Confirm Email</button>
            </div>
        </section>
        </>
     );
}
 
export default VerifyEmail;