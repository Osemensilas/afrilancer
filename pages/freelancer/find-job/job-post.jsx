import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const mockJob = {
  id: 1,
  title: "Full Stack Web Developer Needed for E-Commerce Platform",
  budget: "$1,200 - $2,500",
  duration: "2-3 months",
  skill: "React, Node.js, PostgreSQL",
  description:
    "We are looking for an experienced full-stack developer to build a modern e-commerce platform from the ground up. The platform should support product listings, cart management, checkout with payment integration, and an admin dashboard for managing orders and inventory. You will work closely with our design team and must be comfortable with both frontend and backend responsibilities.",
  postedAt: "May 5, 2026",
  status: "Open",
  client: {
    name: "TechVentures Ltd",
    initials: "TV",
    location: "Lagos, Nigeria",
    memberSince: "March 2024",
    totalJobs: 14,
    rating: 4.7,
  },
};

const mockReviews = [
  {
    id: 1,
    name: "Emeka Okafor",
    initials: "EO",
    rating: 5,
    date: "April 2026",
    comment:
      "Excellent client! Clear requirements, prompt payment, and very responsive throughout the project. Would gladly work with them again.",
  },
  {
    id: 2,
    name: "Fatima Al-Hassan",
    initials: "FA",
    rating: 4,
    date: "February 2026",
    comment:
      "Good experience overall. The scope changed slightly mid-project but the client was understanding and adjusted the budget accordingly.",
  },
  {
    id: 3,
    name: "David Mensah",
    initials: "DM",
    rating: 5,
    date: "January 2026",
    comment:
      "Very professional. They knew exactly what they wanted and provided detailed feedback at every stage. Highly recommend.",
  },
];

const StarRating = ({ rating, size = 16 }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#660066" : "none"}
          stroke={star <= Math.round(rating) ? "#660066" : "#c0c0c0"}
          strokeWidth="2"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
      <span className="text-primary text-[13px] ml-1 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const Avatar = ({ initials, size = 44, bg = "#660066", textColor = "#fff" }) => (
  <div
    className="flex items-center justify-center rounded-full font-semibold shrink-0 tracking-wide"
    style={{
      width: size,
      height: size,
      background: bg,
      color: textColor,
      fontSize: size * 0.33,
    }}
  >
    {initials}
  </div>
);

export default function JobPost() {

    const router = useRouter();

    const { project_id } = router.query;

    const [applied, setApplied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [proposal, setProposal] = useState("");
    const [bidAmount, setBidAmount] = useState("");
    const [job,setJob] = useState({});
    const [skills, setSkills] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [coins, setCoins] = useState(null);

    const handleApply = () => {
        if (!proposal.trim() || !bidAmount.trim()) return;
        setShowModal(false);
        setApplied(true);
        setProposal("");
        setBidAmount("");
    };

    useEffect(() => {

        if (!project_id) return;

        async function fetchJobPost() {
            try {
                const token = localStorage.getItem('token');
                const url = "http://localhost:5067/api/job/get-job-details";

                const response = await axios.get(url, {
                    params: {
                        job_id: project_id
                    },  
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "multipart/form-data"
                    },withCredentials: true
                })
                console.log(response.data);

                if (response.data.status === "success"){
                    setJob(response.data.job);
                    
                    const skillsArray = JSON.parse(response.data.job.skill);

                    setSkills(skillsArray);
                }
            } catch (error) {
                console.log("Error fetching project: ", error);
                console.log(error.response);
            }
        }

        async function fetchClientReview() {
            try {
                const token = localStorage.getItem('token');
                const url = "http://localhost:5067/api/freelancer/get-client-reviews";

                const response = await axios.get(url, {
                    params: {
                        job_id: project_id
                    },  
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "multipart/form-data"
                    },withCredentials: true
                })
                console.log(response.data);

                if (response.data.status === "success"){
                    setReviews(response.data.reviews);
                }
            } catch (error) {
                console.log("Error fetching project: ", error);
                console.log(error.response);
            }
        }

        async function fetchFreelancerCoin(){
            try {
                const token = localStorage.getItem('token');
                const url = "http://localhost:5067/api/freelancer/get-freelance-coin";

                const response = await axios.get(url, { 
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "multipart/form-data"
                    },withCredentials: true
                })
                console.log(response.data);

                if (response.data.status === "success"){
                    setCoins(response.data.coins);
                }
            } catch (error) {
                console.log("Error fetching coin: ", error);
                console.log(error.response);
            }
        }

        fetchJobPost();
        fetchClientReview()
        fetchFreelancerCoin()
    },[project_id])

    const getTimeAgo = (dateString) => {
        const now = new Date();
        const posted = new Date(dateString);

        const diff = Math.floor((now - posted) / (1000 * 60 * 60 * 24));

        if (diff === 0) return "Posted today";
        if (diff === 1) return "Posted 1 day ago";
        return `${diff} days ago`;
    };

    const applyForJob = async () => {
        try {
            const token = localStorage.getItem('token');
            const url = "http://localhost:5067/api/freelancer/job-apply";

            const response = await axios.post(url, {jobId: project_id}, { 
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "multipart/form-data"
                },withCredentials: true
            })
            console.log(response.data);
        } catch (error) {
            console.log("Error applying to Job: ", error);
            console.log(error.response);
        }
    }

    return (
        <section className="min-h-screen bg-background text-accent">
            <div className="bg-bar py-3">
                <div className="w-full px-10 flex items-center justify-end">
                <a href="/freelancer/find-job" className="text-grey text-sm">
                    ← Back to Jobs
                </a>
                </div>
            </div>
            <div className="w-full px-10 py-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 items-start">
                <div>
                {/* Job Header */}
                <div className="bg-backgroundLight rounded-xl p-7 border border-[#444] mb-5">
                    <div className="flex justify-between items-start mb-3">
                    <span className="bg-success text-text text-[11px] font-semibold px-3 py-1 rounded-md uppercase">
                        {job.status}
                    </span>
                    <span className="text-grey text-xs">
                        Posted: {getTimeAgo(job.createdAt)}
                    </span>
                    </div>
                    <h1 className="text-[22px] font-bold leading-snug mb-5">
                    {job.title}
                    </h1>
                    <div className="flex gap-6 flex-wrap">
                    <div>
                        <p className="text-grey text-[11px] uppercase">Budget</p>
                        <p className="text-accent font-bold text-lg">
                        ₦{Number(job.budget).toLocaleString()}
                        </p>
                    </div>
                    <div>
                        <p className="text-grey text-[11px] uppercase">Duration</p>
                        <p className="font-semibold">{job.duration}</p>
                    </div>
                    </div>
                </div>
                {/* Description */}
                <div className="bg-backgroundLight rounded-xl p-6 border border-[#444] mb-5">
                    <h2 className="text-[15px] font-semibold uppercase text-grey mb-3">
                    Job Description
                    </h2>
                    <p className="leading-relaxed text-accent text-[15px]">
                    {job.description}
                    </p>
                </div>
                {/* Skills */}
                <div className="bg-backgroundLight rounded-xl p-5 border border-[#444] mb-5">
                    <h2 className="text-[15px] font-semibold uppercase text-grey mb-3">
                    Required Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                    {
                            skills.map((skill, index) => (
                                <span key={index} className="bg-primary text-accent px-4 py-1 rounded-full text-sm">{skill}</span>
                            ))
                        }
                    </div>
                </div>
                {/* Reviews */}
                    <div className="bg-backgroundLight rounded-xl p-6 border border-[#444]">
                        <h2 className="text-[15px] font-semibold uppercase text-grey mb-5">Reviews from Freelancers</h2>
                        <div className="flex flex-col gap-5">
                            {
                                reviews.length > 0 ? (
                                    reviews.map((review, index) => (
                                        <div key={index}>
                                        {index > 0 && <div className="border-t border-[#444] mb-5" />}

                                        <div className="flex gap-4">
                                            <Avatar initials={review.initials} size={40} bg="#660066" />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <div>
                                                    <p className="font-semibold text-sm">{r.name}</p>
                                                    <StarRating rating={review.rating} size={14} />
                                                    </div>
                                                    <span className="text-xs text-grey">
                                                    {review.date}
                                                    </span>
                                                </div>

                                                <p className="text-accent text-sm leading-relaxed mt-2">
                                                    {review.comment}
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Client has no review yet</p>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="sticky top-6 flex flex-col gap-4">

                <div className="bg-backgroundLight rounded-xl p-6 border border-[#444] text-center">
                    {applied ? (
                    <div>
                        <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center mx-auto mb-3">
                        ✔
                        </div>
                        <p className="text-success font-semibold">
                        Application Sent!
                        </p>
                        <p className="text-sm text-grey">
                        The client will review your proposal
                        </p>
                    </div>
                    ) : (
                    <>
                        <p className="text-accent text-2xl font-bold">
                        ₦{Number(job.budget).toLocaleString()}
                        </p>
                        <p className="text-grey text-sm mb-5">
                        Estimated budget
                        </p>

                        <div className="">
                            <p className="text-grey text-sm mb-5">
                            Service Charge 5% (₦{(Number(job.budget) * 0.05).toLocaleString()})
                            </p>
                        </div>

                        <button
                        onClick={applyForJob}
                        className="w-full bg-primary text-white py-3 rounded-lg font-bold"
                        >
                        Apply for this Job
                        </button>

                        <p className="text-xs text-grey mt-3">
                        Job require {job.coin} coin
                        </p>

                        <p className="text-accent text-2xl font-bold">
                        {coins} coin Available
                        </p>
                    </>
                    )}
                </div>

                </div>
            </div>
        </section>
    );
}