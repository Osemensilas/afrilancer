import { useEffect, useState } from "react";
import Link from "next/link";
import JobCard from "@/components/ui/JobCard";
import axios from "axios";

const FindJOb = () => {

    const [showings, setShowings] = useState('best fit');
    const [jobs, getJobs] = useState([]);

    const filterClicked = (x) => {
        setShowings(x);
    }

    useEffect(() => {

        async function getProjects(showings){

            const token = localStorage.getItem("token");
            let url = "http://localhost:5067/api/freelancer/get-job-post";

            try {
                const response = await axios.get(url, {
                    params: {
                        filter: showings
                    },
                    headers: {
                        "Content-Type" : "appliaction/json",
                        "Authorization" : `Bearer ${token}`
                    },withCredentials: true
                })
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching projects: ", error);
            }
        }

        getProjects(showings);
    },[showings])

    return ( 
        <>
        <section className="h-max w-screen px-10 py-10">
            <div className="h-max w-full mb-5">

            </div>
            <div className="h-max w-full mb-5 flex items-start gap-3">
                <div className="h-max w-[70%]">
                    <div className="h-max w-full flex gap-3 items-center mb-5">
                        <button type="button" onClick={() => filterClicked("best fit")}>
                                <p className={`text-base
                                ${showings === "best fit" ? "text-primary" : "text-accent"}
                                `}>Best Fit</p>
                                <div className={`text-base h-[2px]
                                ${showings === "best fit" ? "bg-primary" : "hidden"}
                                `}></div>
                            </button>
                        <button type="button" onClick={() => filterClicked("most recent")}>
                            <p className={`text-base
                                ${showings === "most recent" ? "text-primary" : "text-accent"}
                                `}>Most Recent</p>
                            <div className={`text-base h-[2px]
                                ${showings === "most recent" ? "bg-primary" : "hidden"}
                                `}></div>
                        </button>
                        <button type="button" onClick={() => filterClicked("saved")}>
                            <p className={`text-base
                                ${showings === "saved" ? "text-primary" : "text-accent"}
                                `}>Saved</p>
                            <div className={`text-base h-[2px]
                                ${showings === "saved" ? "bg-primary" : "hidden"}
                                `}></div>
                        </button>
                    </div>
                    <div className="h-max w-full">
                        {
                            jobs.length > 0 ? (
                                jobs.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))
                            ) : (
                                <div className="h-max w-full flex items-center justify-start py-10 px-10">
                                    <p>No jobs have been posted yet!</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="h-max w-[30%]">

                </div>
            </div>
        </section>
        </>
     );
}
 
export default FindJOb;