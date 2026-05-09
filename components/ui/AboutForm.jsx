import axios from "axios";
import { useState } from "react";

const AboutForm = ({ onUpdate }) => {

    const [showAboutForm, setShowAboutForm] = useState(false);
    const [about, setAbout] = useState("");

    const addAbout = () => {
        setShowAboutForm(true);
    }

    const removeAbout = () => {
        setShowAboutForm(false);
        setAbout("");
    }

    const btnClicked = async () => {

        console.log(about);

        const token = localStorage.getItem('token');

        const url = "http://localhost:5067/api/freelancer/add-about";

        try{
            const response = await axios.post(url, {about: about}, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })
            console.log(response.data);
            if (response.data.status === "success"){
                setAbout("");
                setShowAboutForm(false);
                onUpdate?.(); 
            }
        }catch(error){
            console.log("Error adding about: ", error);
        }
    }

    return ( 
        <>
        <button onClick={addAbout} className="text-primary underline" type="button">Edit About</button>
        <section onClick={removeAbout} className={`h-screen w-screen bg-black/50 absolute top-0 left-0
            ${showAboutForm ? "flex items-center justify-center" : "hidden"}
            `}>
            <form action="" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()} className="relative z-10 bg-accent w-[650px] h-max py-10 px-10 rounded">
                <h2 className="text-3xl text-text pb-10">Let Clients Know you</h2>
                <div className="h-max w-full">
                    <textarea name="about" id="about" value={about} onChange={(e) => setAbout(e.target.value)} className="p-4 outline-none max-w-full min-w-full max-h-[200px] min-h-[200px] rounded border border-grey" placeholder="I am a ..."></textarea>
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
 
export default AboutForm;