import axios from "axios";
import { useEffect, useState } from "react";

const Skill = () => {

    const [newSkill, setNewSkill] = useState([]);

    const addSkill = async (e) => {
        if (e.key === "Enter" && newSkill.trim() !== ""){

            const testingSkill = [newSkill];

            console.log(testingSkill);

            const token = localStorage.getItem('token');
            let url = "http://localhost:5067/api/freelancer/add-skills";

            try {
                const response = await axios.post(url, {skill: [newSkill]}, {
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })
                console.log(response.data);
            } catch (error) {
                console.log("Error posting data: ", error);
            }
        }
    }

    return ( 
        <>
        <section className="h-max w-full px-10 pb-10">
            <h2>Skills</h2>
            <div className="h-max w-full sm:w-3/5 mt-5">
                <div className="w-full h-max flex flex-wrap gap-2">
                    <span className="text-accent bg-grey text-sm py-3 px-3 rounded relative">
                        <p className="text-accent text-sm">HTML</p>
                        <button className="absolute top-0 left-[85%]">
                            <i className="fa fa-times"></i>
                        </button>
                    </span>
                </div>
                <div className="w-full h-max flex flex-col gap-2 mt-5">
                    <label htmlFor="skills" className="hidden">Add your skills</label>
                    <input type="text" value={newSkill} onKeyDown={addSkill} onChange={(e) => setNewSkill(e.target.value)} id="skills" className="h-10 w-full bg-transparent border border-grey rounded px-5 text-accent" placeholder="Type your skill and press enter e.g HTML" />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Skill;