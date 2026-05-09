import { useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";

const AddProject = ({ onUpdate }) => {

    const [showProjectContainer, setShowProjectContainer] = useState(false);
    const [fieldCompleted, setFieldCompleted] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        startAt: '',
        endedAt: '',
        image: [],
        description: '',
        role: ''
    });

    const imgRef = useRef(null);

    const addContainer = () => {
        setShowProjectContainer(true);
    }

    const removeContainer = () => {
        setShowProjectContainer(false);
    }

    const handleChanged = (e) => {

        const { name, value, files, type } = e.target;

        let updatedFormData = { ...formData };

        if (type === "file") {

            const selectedFiles = Array.from(files);

            updatedFormData.image = [
                ...updatedFormData.image,
                ...selectedFiles
            ];
        } else {
            updatedFormData[name] = value;
        }

        setFormData(updatedFormData);

        if (
            updatedFormData.title &&
            updatedFormData.startAt &&
            updatedFormData.endedAt &&
            updatedFormData.role &&
            updatedFormData.description &&
            updatedFormData.image.length > 0
        ) {
            setFieldCompleted(true);
        } else {
            setFieldCompleted(false);
        }
    }

    const addNewImage = () => {
        imgRef.current.click();
    }

    const addNewProject = async () => {
        const token = localStorage.getItem('token');
        const url = "http://localhost:5067/api/freelancer/add-new-project";

        const data = new FormData();

        data.append("title", formData.title);
        data.append("startedAt", formData.startAt);
        data.append("endedAt", formData.endedAt);
        data.append("description", formData.description);
        data.append("role", formData.role);

        formData.image.forEach((file) => {
            data.append("images", file);
        });

        try {
            const response = await axios.post(url, data, {
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "multipart/form-data"
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === "success"){
                onUpdate?.();
                setShowProjectContainer(false);
                setFormData({
                    title: '',
                    startAt: '',
                    endedAt: '',
                    image: [],
                    description: '',
                    role: ''
                });
            }
        } catch (error) {
            console.log("Error posting project: ", error);
            console.log(error.response);
        }
    }

    const removeImg = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            image: prev.image.filter((_, index) => index !== indexToRemove)
        }));
    }

    return(
        <>
        <button type="button" onClick={addContainer} className="text-accent bg-primary py-2 px-4 rounded">New Project</button>
        <section onClick={removeContainer} className={`fixed bg-black/50 top-0 left-0 h-screen w-screen z-20
            ${showProjectContainer ? "flex items-center justify-center" : "hidden"}
            `}>
                <form onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()} className="h-max w-[90%] py-10 px-10 flex justify-center items-center gap-4 rounded bg-accent relative z-50">
                    <div className="h-max w-full flex gap-3 items-start">
                        <div className="h-max w-1/2 flex flex-col gap-3">
                            <div className="h-max w-full">
                                <label htmlFor="title" className="">Project Title:</label>
                                <input type="text" id="title" onChange={handleChanged} value={formData.title} name="title" className="px-5 h-10 w-full border border-grey rounded" />
                            </div>
                            <div className="h-max w-full flex items-start gap-3">
                                <div className="h-max w-1/2">
                                    <label htmlFor="startAt" className="">Started At:</label>
                                    <input type="date" onChange={handleChanged} value={formData.startAt} id="startAt" name="startAt" className="px-5 h-10 w-full border border-grey rounded" />
                                </div>
                                <div className="h-max w-1/2">
                                    <label htmlFor="endedAt" className="">Ended At:</label>
                                    <input type="date" onChange={handleChanged} value={formData.endedAt} id="endedAt" name="endedAt" className="px-5 h-10 w-full border border-grey rounded" />
                                </div>
                            </div>
                            <div className="h-max w-full">
                                <label htmlFor="role" className="">Role:</label>
                                <input type="text" id="role" onChange={handleChanged} value={formData.role} name="role" className="px-5 h-10 w-full border border-grey rounded" />
                            </div>
                            <div className="h-max w-full">
                                <label htmlFor="description" className="">Description:</label>
                                <textarea name="description" onChange={handleChanged} value={formData.description} id="description" className="p-5 max-h-[250px] min-h-[250px] max-w-full min-w-full border border-grey rounded"></textarea>
                            </div>
                        </div>
                        <div className="h-max w-1/2 flex flex-col gap-3 justify-between items-between">
                            <input type="file" name="image" multiple onChange={handleChanged} ref={imgRef} id="image" className="" hidden />
                            <div className="h-max w-full flex justify-end">
                                <button type="submit" onClick={addNewImage} className="py-1 px-4 rounded bg-primary text-accent text-sm">Add Image</button>
                            </div>
                            <div className="h-max w-full overflow-x-auto">
                                <div className="h-max w-max flex gap-3">
                                    {
                                        formData.image.map((img, index) => (
                                            <div key={index} className="relative h-[250px] w-[300px] flex-shrink-0">
                                                <button type="button" onClick={() => removeImg(index)} className="h-10 w-10 bg-black/50 rounded flex justify-center items-center absolute top-[5%] left-[80%] cursor-pointer text-accent z-10"><i className="fa fa-times"></i></button>
                                                <Image src={URL.createObjectURL(img)} alt={`project-${index}`} fill className="h-full w-full rounded object-cover" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="h-max w-full flex justify-end gap-3">
                                <button onClick={removeContainer} type="button" className="bg-danger py-2 px-4 rounded">Cancel</button>
                                <button type="submit" onClick={addNewProject} className={`py-2 px-4 rounded
                                    ${fieldCompleted ? "bg-primary text-accent" : "bg-grey opacity-50 cursor-not-allowed"}
                                `}>Add Project</button>
                            </div>
                        </div>
                    </div>
                </form>
        </section>
        </>
    );
}

export default AddProject;