import axios from "axios";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import AboutForm from "../ui/AboutForm";
import BasicForm from "../ui/BasicDetail";
import VerifyPhone from "../ui/VerifyPhone";
import AddPhone from "../ui/AddPhone";
import AddUserImage from "../ui/AddUserImage";

const ClientProfile = () => {

    const [user, setUser] = useState([]);
    const [skill, setSkill] = useState([]);
    const [imageUrl, setImageUrl] = useState("/account.png");

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

            if (response.data.message === "success"){
                setUser(response.data.client);
                setSkill(response.data.skills);
                const img = response.data.client.image
                    ? `http://localhost:5067${response.data.client.image}`
                    : "/account.png";

                setImageUrl(img);
            }
        } catch (error) {
            console.log("Error fetching about user: ", error);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    },[fetchUser])

    return (
        <>
        <section className="h-max w-screen flex flex-col sm:flex-row items-start gap-5 px-10 py-10">
            <div className="h-max w-full sm:w-3/5">
                <div className="h-max w-max flex items-end gap-3 mb-10">
                    <div className="relative h-[100px] w-[100px]">
                        <img src={imageUrl} className="h-full w-full rounded-full object-cover" />
                        <AddUserImage onUpdate={fetchUser} />
                    </div>
                    <div className="h-max w-max flex flex-col gap-1 text-sm">
                        <p className="text-sm">{`${user.firstName} ${user.lastName}`}</p>
                        <p className="text-sm">{user.title?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</p>
                        <p className="text-sm">{`${user.location?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}, ${user.country?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}`}</p>
                        <p className="text-sm">{user.accountType?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</p>
                        <div className="h-max w-max">
                            <BasicForm onUpdate={fetchUser} />
                        </div>
                    </div>
                </div>
                <div className="h-max w-full">
                    <h2 className="mb-5">About</h2>
                    <div className="text-sm text-accent whitespace-pre-line">{skill.about}</div>
                    <div className="h-max w-max mt-5">
                        <AboutForm onUpdate={fetchUser} />
                    </div>
                </div>
            </div>
            <div className="h-max w-full sm:w-2/5 flex flex-col gap-3">
                <div className="h-max w-full flex justify-between items-center text-sm bg-backgroundLight rounded p-2">
                    <p className="">Email: {user.email}</p>
                    <p className="text-success">Verified</p>
                </div>
                <div className="h-max w-full flex justify-between items-center text-sm bg-backgroundLight rounded p-2">
                    <p className="">Phone Number: {skill.phone}</p>
                    <div className="h-max w-max flex items-center gap-3">
                        <AddPhone onUpdate={fetchUser} />
                        <VerifyPhone onUpdate={fetchUser} />
                    </div>
                </div>
                <div className="h-max w-full flex justify-between items-center text-sm bg-backgroundLight rounded p-2">
                    <p className="">Payment Method: Transfer</p>
                    <p className="text-danger">Unverified</p>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ClientProfile;