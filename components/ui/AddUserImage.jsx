import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';

const AddUserImage = ({ onUpdate }) => {

    const [showImageContainer, setShowImageContainer] = useState(false);
    const [userImg, setUserImg] = useState("");
    const [previewImg, setPreviewImg] = useState("");
    const [imgFile, setImageFile] = useState(null);

    const imgRef = useRef(null);

    const addImage = () => {
        setShowImageContainer(true);
    }

    const removeAbout = () => {
        setShowImageContainer(false);
    }

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');

        let url = "http://localhost:5067/api/profile/get-client-details";

        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },withCredentials: true
            })

            console.log(response.data);

            if (response.data.message === "success"){
                setUserImg(response.data.client.image);
            }
        } catch (error) {
            console.log("Error fetching about user: ", error);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    },[fetchUser])

    const handleChanged = (e) => {
        const imgFile = e.target.files[0];

        if (imgFile){
            const objectUrl = URL.createObjectURL(imgFile);
            setPreviewImg(objectUrl);
        }
        setImageFile(imgFile);
    }

    const uploadImg = () => {
        imgRef.current.click();
    }

    const saveImg = async () => {

        const token = localStorage.getItem('token');
        const url = "http://localhost:5067/api/auth/save-profile-image";
        const imgUrl = "http://localhost:5067/uploads/users/8fbe5bca-5343-4654-9e56-3a9f783e5bed.jpg";

        const formData = new FormData();
        formData.append("image", imgFile);

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "multipart/form-data"
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === "success"){
                onUpdate?.();
                setShowImageContainer(false);
            }
        } catch (error) {
            console.log("Error saving user img: ", error);
        }
    }

    return ( 
        <>
        <button type="button" onClick={addImage} className="absolute top-[75%] h-5 w-5 left-[80%] text-xl">
            <i className="fa fa-camera text-grey text-xl"></i>
        </button>
        <section onClick={removeAbout} className={`fixed bg-black/50 top-0 left-0 h-screen w-screen 
            ${showImageContainer ? "flex items-center justify-center" : "hidden"}
            `}>
            <form onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()} className="h-max w-[500px] py-20 px-10 flex justify-center items-center gap-4 rounded bg-accent relative z-10">
                <input type="file" name="image" ref={imgRef} onChange={handleChanged} id="image" className="" hidden />
                {
                    previewImg ? (
                        <div className="relative h-[100px] w-[100px]">
                            <Image src={previewImg} fill className="object-cover rounded-full" alt="user image" />
                        </div>
                    ) : (
                        <div className="relative h-[100px] w-[100px]">
                            <Image src={userImg || "/account.png"} fill className="object-cover rounded-full" alt="user image" />
                        </div>
                    )
                }
                <div className="h-max w-[1/2] flex flex-col items-center justify-center gap-4">
                    <h2 className="text-text font-bold">Select your Image</h2>
                    <button type="button" onClick={uploadImg} className="text-3xl">
                        <i className="fa fa-upload"></i>
                    </button>
                </div>
                <button type="button" disabled={!previewImg} onClick={saveImg} className={`absolute top-[80%] left-[80%] py-2 px-4 rounded
                    ${previewImg ? "bg-primary text-accent" : "bg-grey opacity-50 cursor-not-allowed"}
                    `}>Save</button>
            </form>
        </section>
        </>
     );
}
 
export default AddUserImage;