import Link from "next/link";

const JobCard = ({job}) => {

    return ( 
        <>
        <Link href={`/project-description?id=${job.job_id}`} className="mb-5 text-sm border border-grey flex flex-col p-5 rounded">
            <div className="h-max w-full">
                <div className="h-max w-full flex items-center gap-3 mb-4">
                    <p className="text-sm">Duration: {job.duration}</p>
                    <p className="text-sm">Budget: {Number(job.budget).toLocaleString()}</p>
                </div>
                <div className="h-max w-full">
                    <p className="text-sm">{job.description.length > 400
                                            ? job.description.slice(0, 400) + "..."
                                            : job.description}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm">{job.payment_verified ? "Payment Verified" : "Payment not Verified"}</p>
                <p className="text-sm">Posted: 5 hours ago</p>
            </div>
            <div className="h-max w-full flex flex-wrap items-center mt-4 gap-2">
                {
                    JSON.parse(job.skill).map((skill, index) => (
                        <p key={index} className="text-sm bg-primary rounded p-2">{skill}</p>
                    ))
                }
            </div>
        </Link>
        </>
     );
}
 
export default JobCard;