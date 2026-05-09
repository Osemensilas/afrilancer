import Link from "next/link";
import AddProject from "../ui/AddProject";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Projects = () => {

    const router = useRouter();

    const [allProjects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        const url = "http://localhost:5067/api/profile/get-user-projects";

        try{
            const response = await axios.get(url, {
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json"
                },withCredentials: true
            })

            if (response.data.status === "success"){
                setLoading(false);
                setAllProjects(response.data.projects);
            }

            if (response.data.status === "error"){
                setLoading(false);
            }
        }catch(error){
            console.log("Error fetching projects: ", error);
            console.log(error.response);
        }
    },[])

    useEffect(() => {
        fetchProjects();
    },[fetchProjects])

    const removeProject = async (projectId) => {
        console.log(projectId);
        const token = localStorage.getItem('token');
        const url = "http://localhost:5067/api/freelancer/delete-project";

        try {
            const response = await axios.post(url, {projectId: projectId}, {
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json"
                },withCredentials: true
            })

            if (response.data.status === "success"){
                fetchProjects();
            }
        } catch (error) {
            console.log("Error deleting project: ", error);
            console.log(error.response);
        }
    }

    const viewProject = (projectId) => {
        console.log(projectId);
        router.push(`/freelancer/profile/project?project_id=${projectId}`);
    }

    return ( 
        <>
        <section className="h-max w-screen px-10 pb-10">
            <div className="h-max w-full flex items-center justify-between">
                <h2>Projects</h2>
                <AddProject onUpdate={fetchProjects} />
            </div>
            <div className="project-scroll h-max w-full overflow-x-auto my-10 scroll-smooth snap-x snap-mandatory">
                <div className="h-max w-max flex items-center gap-5">
                    {
                        allProjects.length > 0 ? (
                            allProjects.map((project, index) => (
                                <div key={index} className="group h-[300px] w-[450px] flex-shrink-0 snap-start relative">
                                    <button type="button" onClick={() => removeProject(project.projectId)} className="hidden group-hover:flex h-10 w-10 bg-black/50 rounded justify-center items-center absolute top-[5%] left-[80%] cursor-pointer text-accent z-10"><i className="fa fa-times"></i></button>
                                    <img src={`http://localhost:5067/projects/${JSON.parse(project.images)[0]}`} className="h-full w-full rounded object-cover" alt={project.title} />
                                    <div className="absolute top-0 left-0 h-full w-full bg-black/50 hidden group-hover:flex justify-center items-center">
                                        <button onClick={() => viewProject(project.projectId)} Value={project.projectId} type="button" className="absolute py-2 px-4 bg-primary rounded text-accent">View Project</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="h-max w-full flex items-center justify-start py-10">
                                <p className="">You do not have any project yet!</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Projects;