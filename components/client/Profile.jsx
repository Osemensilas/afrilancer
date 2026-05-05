import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ClientProfile = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getAboutUser(){

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
                }
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching about user: ", error);
            }
        }

        getAboutUser();
    },[])
    return ( 
        <>
        <section className="h-max w-screen flex flex-col sm:flex-row items-start gap-5 px-10 py-10">
            <div className="h-max w-full sm:w-3/5">
                <div className="h-max w-max flex items-end gap-3 mb-10">
                    <div className="relative h-[100px] w-[100px]">
                        <Image src="/freelancer1.jpg" fill className="object-cover rounded-full" alt="user-image" />
                        <button type="button" className="absolute top-[75%] left-[80%]">
                            <i className="fa fa-camera text-grey"></i>
                        </button>
                    </div>
                    <div className="h-max w-max flex flex-col gap-3 text-sm">
                        <p className="text-sm">{`${user.firstName} ${user.lastName}`}</p>
                        <p className="text-sm">Software Engineer</p>
                        <p className="text-sm">{user.country?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</p>
                        <p className="text-sm">{user.accountType?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</p>
                    </div>
                </div>
                <div className="h-max w-full">
                    <h2 className="mb-5">About</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit doloremque distinctio nemo fugit accusamus saepe fugiat architecto. Distinctio, inventore! Labore, tenetur. Officia iste saepe dolorem laudantium odio quis voluptas dignissimos.</p>
                    <div className="h-max w-max mt-5">
                        <button className="text-accent" type="button">Edit About</button>
                    </div>
                </div>
            </div>
            <div className="h-max w-full sm:w-2/5 flex flex-col gap-3">
                <div className="h-max w-full flex justify-between items-center text-sm bg-backgroundLight rounded p-2">
                    <p className="">Email: {user.email}</p>
                    <p className="text-success">Verified</p>
                </div>
                <div className="h-max w-full flex justify-between items-center text-sm bg-backgroundLight rounded p-2">
                    <p className="">Phone Number: +234 905 406 0454</p>
                    <p className="text-success">Verified</p>
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