import axios from "axios";
import { useEffect, useState } from "react";

const Skill = () => {

    const [newSkill, setNewSkill] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {

        async function fetchSkills(){

            const token = localStorage.getItem('token');

            let url = "http://localhost:5067/api/freelancer/fetch-skills";
            try {
                const response = await axios.get(url, {
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })

                if (response.data.status === "success"){
                    setSkills(response.data.skillList);
                }
            } catch (error) {
                console.log("Error fetching skills", error);
            }
        }
        fetchSkills();
    },[])

    const addSkill = async (e) => {
        if (e.key === "Enter" && newSkill.trim() !== ""){

            const skillArray = newSkill.split(/[\s,]+/).map(skill => skill.trim()).filter(skill => skill !== "");

            const token = localStorage.getItem('token');
            let url = "http://localhost:5067/api/freelancer/add-skills";

            try {
                const response = await axios.post(url, {skill: skillArray}, {
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })

                if (response.data.status === "success"){
                    let url = "http://localhost:5067/api/freelancer/fetch-skills";
                    try {
                        const response = await axios.get(url, {
                            headers: {
                                "Authorization" : `Bearer ${token}`,
                                "Content-Type" : "application/json"
                            },withCredentials: true
                        })
                        
                        if (response.data.status === "success"){
                            setSkills(response.data.skillList);
                            setNewSkill([]);
                        }
                    } catch (error) {
                        console.log("Error fetching skills", error);
                    }
                }
            } catch (error) {
                console.log("Error posting data: ", error);
            }
        }
    }

    const removeSkill = async (e) => {
        const skill = e.currentTarget.value;

        const token = localStorage.getItem("token");

        let url = "http://localhost:5067/api/freelancer/remove-skills";

        const response = await axios.get(url, {
            params: {
                skill: skill
            },
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            },withCredentials: true
        })

        if (response.data.status === "success"){
            let url = "http://localhost:5067/api/freelancer/fetch-skills";
            try {
                const response = await axios.get(url, {
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })

                if (response.data.status === "success"){
                    setSkills(response.data.skillList);
                }
            } catch (error) {
                console.log("Error fetching skills", error);
            }
        }
    }

    return ( 
        <>
        <section className="h-max w-full px-10 pb-10">
            <h2>Skills</h2>
            <div className="h-max w-full sm:w-3/5 mt-5">
                <div className="w-full h-max flex flex-wrap gap-2">
                    {
                        skills.length > 0 ? (
                            skills.map((skill, index) => (
                                <span key={index} className="text-accent bg-grey text-xs py-2 px-3 rounded relative">
                                    <p className="text-accent">{skill}</p>
                                    <button onClick={removeSkill} value={skill} className="absolute top-0 left-[85%]">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </span>
                            ))
                        ) : (
                            <p className="text-sm">Your have not added skill yet!</p>
                        )
                    }
                </div>
                <div className="w-full h-max flex flex-col gap-2 mt-5">
                    <label htmlFor="skills" className="hidden">Add your skills</label>
                    <input type="text" value={newSkill} onKeyDown={addSkill} onChange={(e) => setNewSkill(e.target.value)} id="skills" className="h-10 w-full sm:w-1/2 bg-transparent border border-grey rounded px-5 text-accent" placeholder="Type your skill and press enter e.g HTML" />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Skill;