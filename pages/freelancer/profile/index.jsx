import ClientProfile from "@/components/client/Profile";
import Projects from "@/components/client/Projects";
import Reviews from "@/components/client/Reviews";
import Skill from "@/components/client/Skills";

const Profile = () => {
    return(
        <>
        <ClientProfile />
        <Skill />
        <Reviews />
        <Projects />
        </>
    );
}

export default Profile;