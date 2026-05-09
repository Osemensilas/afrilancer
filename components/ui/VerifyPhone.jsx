import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const VerifyPhone = ({ onUpdate }) => {

    const [showAboutForm, setShowAboutForm] = useState(false);
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [skill, setSkill] = useState([]);

    const addAbout = () => {
        setShowAboutForm(true);
    }

    const removeAbout = () => {
        setShowAboutForm(false);
        setCode("");
    }

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');

        let url = "http://localhost:5067/api/profile/get-client-details";

        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })

            if (response.data.message === "success"){
                setSkill(response.data.skills)
            }
        } catch (error) {
            console.log("Error fetching about user: ", error);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    },[fetchUser])

    const verify = async () => {

        const token = localStorage.getItem('token');
        const url = "http://localhost:5067/api/auth/verify-phone";

        try {
            const response = await axios.post(url, {}, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })

            console.log(response.data);

            if (response.data.status === "success"){
                setShowAboutForm(true);
            }
        } catch (error) {
            console.log("Error verifying phone: ", error);
        }
    }

    const btnClicked = async () => {

        const token = localStorage.getItem('token');
        let url = "http://localhost:5067/api/auth/verify-phone-code";

        try {
            const response = await axios.post(url, {code: code}, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === "success"){
                setCode("");
                fetchUser();
                setShowAboutForm(false);
            }
        } catch (error) {
            console.log("Error send code: ", error);
        }
    }

    return ( 
        <>
        {
            skill.phoneVerified ? (
                <button className="text-success text-sm" type="button">Verified</button>
            ) : (
                <button onClick={verify} className="text-danger text-sm underline" type="button">Verify Phone</button>
            )
        }
        <section onClick={removeAbout} className={`h-screen w-screen bg-black/50 fixed top-0 left-0
            ${showAboutForm ? "flex items-center justify-center" : "hidden"}
            `}>
            <form action="" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()} className="relative z-10 bg-accent w-[650px] h-max py-10 px-10 rounded">
                <h2 className="text-3xl text-text pb-10 text-center">Enter the 6 digit code sent to you</h2>
                <p className="text-center text-grey">Code expires in 5 minutes</p>
                <div className="h-max w-full flex flex-col gap-3">
                    <div className="h-max w-full">
                        <label htmlFor="Code">Code: </label>
                        <input type="text" name="code" value={code} onChange={(e) => setCode(e.target.value)} id="code" className="w-full h-10 border border-grey rounded px-5" />
                    </div>
                </div>
                <div className="h-max w-full flex items-center gap-4 pt-10">
                    <button type="submit" onClick={btnClicked} className="px-4 py-2 bg-primary text-sm text-accent rounded">Update</button>
                    <button onClick={removeAbout} type="button" className="px-4 py-2 bg-danger text-sm text-accent rounded">Cancel</button>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default VerifyPhone;