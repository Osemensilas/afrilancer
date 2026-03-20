import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Hirer = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjects(){

            const token = localStorage.getItem("token");
            
            try{
                let url = "http://localhost:5067/api/client/get-client-jobs";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": `Bearer ${token}`
                    },withCredentials: true
                })

                if (response.data.message === "success"){
                    setProjects(response.data.jobs);
                }
            }catch(error){
                console.log("Error fetching data: ", error);
            }
        }
        getProjects();
    },[])

    function timeAgo(dateString) {
        const now = new Date();
        const past = new Date(dateString);
        const diffInSeconds = Math.floor((now - past) / 1000);

        const minutes = Math.floor(diffInSeconds / 60);
        const hours = Math.floor(diffInSeconds / 3600);
        const days = Math.floor(diffInSeconds / 86400);

        if (diffInSeconds < 60) return "Just now";
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    return ( 
        <>
        <section className="min-h-screen w-screen flex gap-3 p-10">
            <div className="h-full w-[70%]">
                <h2 className="text-xl font-thin text-accent mb-10">Projects</h2>
                <div className="h-max w-full">
                    {
                    projects.length > 0 ? (
                        projects.map((projects, index) => (
                            <Link key={index} href={`/client/project-description?id=${projects.jobId}`} className="mb-5 text-sm border border-grey flex flex-col p-5 rounded">
                                <div className="h-max w-full">
                                    <div className="h-max w-full flex items-center justify-between gap-3 mb-4">
                                        <p className="text-sm">Duration: {projects.duration}</p>
                                        <p className="text-sm">Budget: ${Number(projects.budget).toLocaleString()}</p>
                                    </div>
                                    <div className="h-max w-full">
                                        <p className="text-sm">{projects.description.length > 400
                                            ? projects.description.slice(0, 400) + "..."
                                            : projects.description}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm">{
                                    projects.paid === false ? "Payment Unverified" : "Payment"
                                    }</p>
                                    <p className="text-sm">Posted: {timeAgo(projects.createdAt)}</p>
                                </div>
                                <div className="h-max w-full flex flex-wrap items-center mt-4 gap-2">
                                    {
                                        JSON.parse(projects.skill).map((skill, index) => (
                                            <p key={index} className="text-sm bg-primary rounded p-2">{skill}</p>
                                        ))
                                    }
                                </div>
                            </Link>
                        ))) : (
                            <div className="h-full w-full">
                                <p>You do not have an active project.</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="h-full w-[30%]">
                <div className="h-max w-full mb-10 flex justify-center items-center">
                    <Link href="/client/create-project" className="bg-primary text-accent rounded py-2 px-4">New Project</Link>
                </div>
                <div className="h-max w-full px-10">

                </div>
            </div>
        </section>
        </>
     );
}
 
export default Hirer;