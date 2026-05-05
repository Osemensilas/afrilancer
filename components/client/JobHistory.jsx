import { useEffect, useState } from "react";
import JobCard from "../ui/JobCard";
import axios from "axios";

const JobHistory = () => {

    const [showings, setShowings] = useState('jobs posted');
    const [jobs, setJobs] = useState([]);

    const filterClicked = (x) => {
        setShowings(x);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        async function fetchJobs(filter){
            let url = "http://localhost:5067/api/client/get-client-jobs";

            try{
                const response = await axios.get(url, {
                    params: {
                        filter: filter,
                    },
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": `Bearer ${token}`
                    },withCredentials: true
                })

                if (response.data.message === "success"){
                    setJobs(response.data.jobs);
                }
            }catch(error){
                console.log("Error fetcing client jobs: ", error);
            }
        }

        async function getProjects(showings){
            fetchJobs(showings);
        }

        getProjects(showings);
        fetchJobs(showings);
    },[showings])

    return ( 
        <>
        <section className="h-max w-full px-10 pb-10">
            <h2 className="">Job History</h2>
            <div className="h-max w-full mt-5">
                <div className="h-max w-full flex gap-3 items-center mb-5">
                    <button type="button" onClick={() => filterClicked("jobs posted")}>
                            <p className={`text-base
                            ${showings === "jobs posted" ? "text-primary" : "text-accent"}
                            `}>Jobs Posted</p>
                            <div className={`text-base h-[2px]
                            ${showings === "jobs posted" ? "bg-primary" : "hidden"}
                            `}></div>
                        </button>
                    <button type="button" onClick={() => filterClicked("jobs completed")}>
                        <p className={`text-base
                            ${showings === "jobs completed" ? "text-primary" : "text-accent"}
                            `}>Jobs Completed</p>
                        <div className={`text-base h-[2px]
                            ${showings === "jobs completed" ? "bg-primary" : "hidden"}
                            `}></div>
                    </button>
                    <button type="button" onClick={() => filterClicked("jobs in progress")}>
                        <p className={`text-base
                            ${showings === "jobs in progress" ? "text-primary" : "text-accent"}
                            `}>Jobs in Progress</p>
                        <div className={`text-base h-[2px]
                            ${showings === "jobs in progress" ? "bg-primary" : "hidden"}
                            `}></div>
                    </button>
                </div>
                <div className="h-max w-full sm:w-3/5">
                    { jobs.length > 0 ? (
                        jobs.map((job) => (
                            <JobCard key={jobs.id} job={job} />
                        ))) : (
                            <div className="h-max w-full flex items-center justify-start py-10 px-10">
                                <p>You have not posted any jobs yet!</p>
                            </div>
                        )}
                </div>
            </div>
        </section>
        </>
     );
}
 
export default JobHistory;