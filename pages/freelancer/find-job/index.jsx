import { useEffect, useState } from "react";
import JobCard from "@/components/ui/JobCard";
import axios from "axios";

const FindJOb = () => {

    const [showings, setShowings] = useState('best fit');
    const [jobs, setJobs] = useState([]);

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

                if (response.data.message === "success"){
                    setJobs(response.data.jobs);
                }
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
                        <button type="button" onClick={() => filterClicked("applied")}>
                            <p className={`text-base
                                ${showings === "applied" ? "text-primary" : "text-accent"}
                                `}>Applied</p>
                            <div className={`text-base h-[2px]
                                ${showings === "applied" ? "bg-primary" : "hidden"}
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
                                    {
                                        showings === "best fit" ? (
                                            <p>No best yet!</p>
                                        ) : showings === "most recent" ? (
                                            <p>No jobs have been posted yet!</p>
                                        ) : (
                                            <p>You have not applied yet!</p>
                                        )
                                    }
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