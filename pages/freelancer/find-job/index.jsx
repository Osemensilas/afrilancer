import { useEffect, useState } from "react";
import Link from "next/link";

const FindJOb = () => {

    const [showings, setShowings] = useState('best fit');
    const [jobs, getJobs] = useState([]);

    const filterClicked = (x) => {
        setShowings(x);
    }

    useEffect(() => {
        async function getProjects(showings){
            console.log(showings);
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
                        <Link href={"/project-description?id=tedhfbrujn489hnd"} className="mb-5 text-sm border border-grey flex flex-col p-5 rounded">
                            <div className="h-max w-full">
                                <div className="h-max w-full flex items-center gap-3 mb-4">
                                    <p className="text-sm">Duration: Less than a month</p>
                                    <p className="text-sm">Budget: {Number(30000).toLocaleString()}</p>
                                </div>
                                <div className="h-max w-full">
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate alias sed quibusdam, aliquid maiores libero nam id animi consequuntur nemo ducimus itaque obcaecati nulla dignissimos, ab facilis aut accusantium?</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm">Payment Verified</p>
                                <p className="text-sm">Posted: 5 hours ago</p>
                            </div>
                            <div className="h-max w-full flex flex-wrap items-center mt-4 gap-2">
                                <p className="text-sm bg-primary rounded p-2">HTML</p>
                                <p className="text-sm bg-primary rounded p-2">CSS</p>
                                <p className="text-sm bg-primary rounded p-2">Next.js</p>
                                <p className="text-sm bg-primary rounded p-2">WordPress</p>
                            </div>
                        </Link>
                        <Link href={"/project-description?id=tedhfbrujn489hnd"} className="mb-5 text-sm border border-grey flex flex-col p-5 rounded">
                            <div className="h-max w-full">
                                <div className="h-max w-full flex items-center gap-3 mb-4">
                                    <p className="text-sm">Duration: Less than a month</p>
                                    <p className="text-sm">Budget: {Number(30000).toLocaleString()}</p>
                                </div>
                                <div className="h-max w-full">
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate alias sed quibusdam, aliquid maiores libero nam id animi consequuntur nemo ducimus itaque obcaecati nulla dignissimos, ab facilis aut accusantium?</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm">Payment Verified</p>
                                <p className="text-sm">Posted: 5 hours ago</p>
                            </div>
                            <div className="h-max w-full flex flex-wrap items-center mt-4 gap-2">
                                <p className="text-sm bg-primary rounded p-2">HTML</p>
                                <p className="text-sm bg-primary rounded p-2">CSS</p>
                                <p className="text-sm bg-primary rounded p-2">Next.js</p>
                                <p className="text-sm bg-primary rounded p-2">WordPress</p>
                            </div>
                        </Link>
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