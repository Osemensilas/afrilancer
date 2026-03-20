import axios from "axios";
import { useSearchParams } from "next/navigation";

const ConfirmEmail = () => {

    const searchParams = useSearchParams();

    const email = searchParams.get('email');

    const resendMail = async () => {
        try{
            let url = "http://localhost:5067/api/auth/resend-confim-mail";

            const response = await axios.post(url, {email: email}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            console.log(response.data);
        }catch(error){
            console.log("Error sending email: ", error);
        }
    }

    return ( 
        <>
        <section className="h-max w-full sm:p-20 p-10">
            <div className="h-max w-full mb-5">
                <p className="text-center text-sm">A verification message has been sent to your email address. If you did not recieve any mail, click the resend button</p>
            </div>
            <div className="h-max w-full flex items-center justify-center">
                <button type="button" onClick={resendMail} className="text-primary">Resend Mail</button>
            </div>
        </section>
        </>
     );
}
 
export default ConfirmEmail;