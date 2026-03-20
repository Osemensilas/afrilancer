import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CreateProject = () => {

    const route = useRouter();

    const [showDescription, setShowDescription] = useState(true);
    const [showSkills, setShowSkills] = useState(false);
    const [showBudget, setShowBudget] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [error, setError] = useState("");
    const [newSkill, setNewSkill] = useState('');
    const [clientSkills, setClienSkills] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        skill: [],
        budget: '',
        duration: ''
    })
    const [suggestedSkills, setSuggestedSkills] = useState([
        "WordPress",
        "Web Development",
        "React.js",
        "Next.js"
    ]);

    const handleChanged = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const submitBtnClicked = async (e) => {
        if (showDescription){
            if (formData.description === "" || formData.duration === ""){
                setError("Description and duration are required.");
                return;
            }
            setError("");
            setShowDescription(false);
            setShowSkills(true);
        }

        if (showSkills){
            if (formData.skill.length < 1){
                setError("Enter atleast one skill");
                return;
            }
            setError("");
            setShowSkills(false);
            setShowBudget(true);
        }

        if (showBudget){
            let numValue = /^[0-9]+$/;

            if (!numValue.test(formData.budget)){
                setError("Invalid budget");
                return;
            }
            setError("");
            setShowBudget(false);
            setShowPreview(true);
            e.currentTarget.innerHTML = "Submit";
        }

        if (showPreview){

            const token = localStorage.getItem("token");

            try{
                let url = "http://localhost:5067/api/client/create-new-job";

                const response = await axios.post(url, formData, {
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": `Bearer ${token}`
                    },withCredentials: true
                })

                if (response.data.message === "success"){
                    route.push("/client");
                }
            }catch(error){
                console.log("Error sending data: ", error);
            }
        }
    }

    const goBack = (e) => {
        if (showPreview){
            e.currentTarget.parentElement.children[1].innerHTML = "Next";
            setShowBudget(true);
            setShowPreview(false);
        }

        if (showBudget){
            setShowSkills(true);
            setShowBudget(false);
        }

        if (showSkills){
            setShowDescription(true);
            setShowSkills(false);
        }
    }

    const addSkill = (e) => {
        if (e.key === "Enter" && newSkill.trim() !== ""){

            e.preventDefault();

            if (clientSkills.includes(newSkill.trim())){
                setNewSkill("");
                return;
            }

            if (!clientSkills.includes(newSkill.trim())){

                const skill = newSkill.trim();
                const updatedSkills = [...clientSkills, skill];

                setClienSkills(updatedSkills);
                setNewSkill("");
            }
        }
    }

    const suggestedSkill = (e) => {
        setClienSkills([...clientSkills, e.currentTarget.value.trim()]);
        checkSkillValues(e.currentTarget.value.trim());
    }

    function checkSkillValues(x) {
        setSuggestedSkills(prev => prev.filter(skill => skill !== x));
    }

    const removeSkill = (skillToRemove) => {
        const updatedSkills = clientSkills.filter(
            skill => skill !== skillToRemove
        );

        setClienSkills(updatedSkills);

        setSuggestedSkills(prev => [...prev, skillToRemove]);
    };

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            skill: clientSkills
        }));
    }, [clientSkills]);

    return ( 
        <>
        <section className="h-[calc(100vh-100px)] w-full p-10">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="h-[90%] w-full overflow-hidden">
                    <div className="h-full w-[70%]">
                        <div className={`py-2 px-2 w-full mb-4 border-rounded bg-danger text-center text-accent rounded
                            ${error ? "" : "hidden"}
                            `}>{error}</div>
                        <div className={`h-full w-full
                            ${showDescription ? "" : "hidden"}
                            `}>
                            <div className="h-max w-full flex flex-col gap-3">
                                <div className="h-max w-full flex flex-col gap-2">
                                    <label htmlFor="duration" className="text-grey">Duration</label>
                                    <select name="duration" value={formData.duration} onChange={handleChanged} id="duration" className="border border-grey rounded outline-none w-full h-10 text-accent bg-transparent">
                                        <option value="" className="text-accent">-- Select Duration --</option>
                                        <option value="less than a month">Less than a month</option>
                                        <option value="one - three month">One to three month</option>
                                        <option value="month than three months">More than three month</option>
                                    </select>
                                </div>
                                <div className="h-max w-full flex flex-col gap-2">
                                    <label htmlFor="description" className="text-grey">Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleChanged} id="description" className="border border-grey rounded bg-transparent max-w-full min-w-full min-h-[200px] max-h-[200px] text-accent p-3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className={`h-full w-full
                            ${showSkills ? "" : "hidden"}
                            `}>
                            <label className="text-grey">Type Required Skills</label>
                            <div className="h-max w-full">
                                <div className="h-max w-full flex flex-wrap gap-2 mb-2 py-4 px-5 border border-grey rounded my-5">
                                    {
                                        clientSkills.map((skill, index) => (
                                            <span key={index} className="text-accent bg-grey text-sm py-3 px-3 rounded relative">
                                                <p className="text-accent text-sm">{skill}</p>
                                                <button onClick={() => removeSkill(skill)} className="absolute top-0 left-[85%]">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="h-max w-full">
                                    <input type="text" value={newSkill} onKeyDown={addSkill} onChange={(e) => setNewSkill(e.target.value)} className="h-10 w-full bg-transparent border border-grey rounded px-5 text-accent" placeholder="Type your skill and press enter e.g Web Develoment" />
                                </div>
                                <div className="w-full h-max mt-5">
                                    <label htmlFor="" className="text-grey pt-5">Suggest Skills</label>
                                    <div className="w-full h-max mt-3 flex flex-wrap gap-2 mb-2">
                                        {
                                            suggestedSkills.map((skill, index) => (
                                                <button type="button" onClick={suggestedSkill} value={skill} key={index} className="text-accent bg-grey text-sm p-2 rounded">{skill}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`h-full w-full
                            ${showBudget ? "" : "hidden"}
                            `}>
                            <div className="h-max w-full flex flex-col gap-2">
                                <label htmlFor="budget" className="text-grey my-2">Budget</label>
                                <input type="text" name="budget" value={formData.budget} onChange={handleChanged} placeholder="Budget is in USD" className="border border-grey rounded outline-none w-full h-10 text-accent bg-transparent px-5" />
                            </div>
                        </div>
                        <div className={`h-full w-full
                            ${showPreview ? "" : "hidden"}
                            `}>
                            <div className="w-full h-[calc(100vh-220px)] overflow-y-scroll pr-3">
                                <div className="w-full h-[40px] flex items-center justify-between mb-4">
                                    <div className="w-max h-max">
                                        <p className="text-sm">Duration: {formData.duration}</p>
                                    </div>
                                    <div className="w-max h-max">
                                        <p className="text-sm">Budget: {formData.budget}</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="w-full h-[70%] mb-2">
                                        <p className="">{formData.description}</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-wrap items-center gap-3">
                                    {
                                        formData.skill.map((skill, index) => (
                                            <p key={index} className="p-1 text-sm text-accent bg-grey mb-1 rounded">{skill}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`h-full w-full
                            ${showPayment ? "" : "hidden"}
                            `}>

                        </div>
                    </div>
                </div>
                <div className="h-[10%] w-full flex items-center justify-end gap-5">
                    <button onClick={goBack} className={`bg-primary text-accent rounded py-2 px-4
                        ${showDescription ? "hidden" : ""}
                        `}>Prev</button>
                    <button onClick={submitBtnClicked} className="bg-primary text-accent rounded py-2 px-4">Next</button>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default CreateProject;