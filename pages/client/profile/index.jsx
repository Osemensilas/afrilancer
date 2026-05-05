import JobHistory from "@/components/client/JobHistory";
import ClientProfile from "@/components/client/Profile";
import Reviews from "@/components/client/Reviews";

const Profile = () => {
    return ( 
        <>
        <ClientProfile />
        <JobHistory />
        <Reviews />
        </>
     );
}
 
export default Profile;