import axios from "axios";
import { useState } from "react";

const BasicForm = ({ onUpdate }) => {

    const [showAboutForm, setShowAboutForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
    });

    const addAbout = () => {
        setShowAboutForm(true);
    }

    const removeAbout = () => {
        setShowAboutForm(false);
        setFormData({
            title: '',
            location: ''
        });
    }

    const btnClicked = async () => {

        const token = localStorage.getItem('token');

        const url = "http://localhost:5067/api/auth/add-basic";

        try{
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })

            if (response.data.status === "success"){
                setFormData({
                    title: '',
                    location: ''
                });
                setShowAboutForm(false);
                onUpdate?.(); 
            }
        }catch(error){
            console.log("Error adding about: ", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    return ( 
        <>
        <button onClick={addAbout} className="text-primary underline" type="button">Edit</button>
        <section onClick={removeAbout} className={`h-screen w-screen bg-black/50 fixed top-0 left-0
            ${showAboutForm ? "flex items-center justify-center" : "hidden"}
            `}>
            <form action="" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()} className="relative z-10 bg-accent w-[650px] h-max py-10 px-10 rounded">
                <h2 className="text-3xl text-text pb-10">Basic Details</h2>
                <div className="h-max w-full flex flex-col gap-3">
                    <div className="h-max w-full">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} id="title" className="w-full h-10 border border-grey rounded px-5" />
                    </div>
                    <div className="h-max w-full">
                        <label htmlFor="location">Location: </label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} id="location" className="w-full h-10 border border-grey rounded px-5" />
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
 
export default BasicForm;