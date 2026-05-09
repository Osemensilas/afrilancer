import axios from "axios";
import { useState } from "react";

const AddPhone = ({ onUpdate }) => {

    const [showAboutForm, setShowAboutForm] = useState(false);
    const [phone, setPhone] = useState("");

    const addAbout = () => {
        setShowAboutForm(true);
    }

    const removeAbout = () => {
        setShowAboutForm(false);
        setPhone("");
    }

    const btnClicked = async () => {

        const token = localStorage.getItem('token');

        const url = "http://localhost:5067/api/profile/add-phone";

        try{
            const response = await axios.post(url, {phone: phone}, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })

            if (response.data.status === "success"){
                setPhone("");
                setShowAboutForm(false);
                onUpdate?.(); 
            }
        }catch(error){
            console.log("Error adding phone: ", error);
        }
    }

    return ( 
        <>
        <button onClick={addAbout} className="text-grey text-sm underline" type="button">Edit</button>
        <section onClick={removeAbout} className={`h-screen w-screen bg-black/50 fixed top-0 left-0
            ${showAboutForm ? "flex items-center justify-center" : "hidden"}
            `}>
            <form action="" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()} className="relative z-10 bg-accent w-[650px] h-max py-10 px-10 rounded">
                <h2 className="text-3xl text-text pb-10">Enter Your Phone Number</h2>
                <div className="h-max w-full flex flex-col gap-3">
                    <div className="h-max w-full">
                        <label htmlFor="phone">Phone Number: </label>
                        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" className="w-full h-10 border border-grey rounded px-5" />
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
 
export default AddPhone;