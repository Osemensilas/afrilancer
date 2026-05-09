import Link from "next/link";
import { useRouter } from "next/router";

const JobCard = ({job}) => {

    const router = useRouter();

    const pathname = router.pathname;

    const timeAgo = (dateString) => {
        const now = new Date();
        const past = new Date(dateString);

        const diff = now - past; // milliseconds

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return "Just posted";
        if (minutes < 60) return `${minutes} min ago`;
        if (hours < 24) return `${hours} hr ago`;
        return `${days} day${days > 1 ? "s" : ""} ago`;
    };

    return ( 
        <>
        <Link href={pathname === "/freelancer/find-job" ? `/freelancer/find-job/job-post?project_id=${job.jobId}` : `/project-description?id=${job.jobId}`} className="mb-5 text-sm border border-grey flex flex-col p-5 rounded">
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
                <p className="text-sm">Posted: {timeAgo(job.createdAt)}</p>
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