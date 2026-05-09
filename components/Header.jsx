import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {

    const router = useRouter();
    const currentPath = router.pathname;
    const [activeClient, setActiveClient] = useState(null);
    const [userType, setUserType] = useState(null);
    

    useEffect(() => {
        const token = localStorage.getItem("token");
        const client = JSON.parse(localStorage.getItem("user"));
        const clientType = client?.user_type;

        if (!token) return;

        function isExpiredToken(token){
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                return payload.exp * 1000 < Date.now();
            } catch (error) {
                return true;
            }
        }

        if (isExpiredToken(token)){
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("active");

            router.push("/");
        }

        if (!client){
            setActiveClient(false);
        }else{
            setActiveClient(true);
            setUserType(clientType);
        }

    },[userType])

    const logout = () => {
        let url = "http://localhost:5067/api/auth/logout";

        async function logoutUser(){
            try {
                const response = await axios.post(url, {'logout': true}, {
                    headers: {
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })

                if (response.data.status === "success"){
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("active");

                    router.push("/");
                }
            } catch (error) {
                console.log("Error logging out: ", logout);
            }
        }

        logoutUser();
    }

    return ( 
        <>
        <header id="header" className={`${
            currentPath === "/register" ? "hidden" : "" ||
            currentPath === "/register/create-account" ? "hidden" : "" ||
            currentPath === "/signin" ? "hidden" : "" ||
            currentPath === "/reset" ? "hidden" : "" ||
            currentPath === "/reset/verify-email" ? "hidden" : "" ||
            currentPath === "/reset/update-password" ? "hidden" : "" ||
            currentPath === "/freelancer/account-setup" ? "hidden" : "" ||
            currentPath === "/freelancer/account-setup/categories" ? "hidden" : ""
            }`}>
            <div className={styles.header}>
                {/* Left */}
                <div className={styles.headerLeft}>
                    <div className={styles.headerLogoContainer} onClick={() => (window.location.href = "/")}>
                        <Image src="/afrilancer-logo.png" alt="logo" fill className={styles.headerLogo} />
                    </div>
                </div>

                {/* Right */}
                <div className={`styles.headerRight ${
                                activeClient ? "hidden" : "flex items-center"
                            }`}>
                    <nav className={styles.headerNav}>
                        <ul className={styles.menu}>
                        <li className={styles.menuContent}>
                            <Link href="/hire">For hirer</Link>
                        </li>
                        <li className={styles.menuContent}>
                            <Link href="/worker">For worker</Link>
                        </li>
                        </ul>
                    </nav>

                    <div className={styles.headerUserContainer}>
                        <div className={styles.headerClientContainer}></div>
                        <div className={styles.headerDeveloperContainer}></div>

                        <div className={styles.headerSignUpContainer}>
                        <div className={`styles.headerSignUp`}>
                            <ul className={`${styles.menu} flex items-center`}>
                                <li className={`styles.menuContent`}>
                                    <Link href="/register" className={styles.signupBtn}>
                                    Register
                                    </Link>
                                </li>
                                <li className={styles.menuContent}>
                                    <Link href="/signin" className={styles.loginBtn}>
                                    Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Client Nav*/}
                <div className={`h-max w-max flex items-center gap-20
                    ${activeClient ? "" : "hidden"}
                    `}>
                    <ul className={`${userType === "freelancer" ? "flex items-center gap-5" : "hidden"}`}>
                        <li className="h-max w-max">
                            <Link href={"/freelancer/find-job"} className={`
                                ${currentPath === "/freelancer/find-job" ? "text-primary" : "text-accent"}
                                `}>Find Job</Link>
                        </li>
                        <li className="h-max w-max">
                            <Link href={"/freelancer/profile"} className={`
                                ${currentPath === "/freelancer/profile" ? "text-primary" : "text-accent"}
                                `}>Profile</Link>
                        </li>
                    </ul>
                    <ul className={`${userType === "client" ? "flex items-center gap-5" : "hidden"}`}>
                        <li className="h-max w-max">
                            <Link href={"/client"} className={`
                                ${currentPath === "/client" ? "text-primary" : "text-accent"}
                                `}>Home</Link>
                        </li>
                        <li className="h-max w-max">
                            <Link href={"/client/profile"} className={`
                                ${currentPath === "/client/profile" ? "text-primary" : "text-accent"}
                                `}>Profile</Link>
                        </li>
                    </ul>
                    <button type="button" onClick={logout} className={`bg-danger py-2 px-5 rounded
                        ${activeClient ? "" : ""}
                        `}>Logout</button>
                </div>
                {/* Hamburger */}
                <div className={styles.hamburgerContainer}>
                    <div className={styles.hamburger}></div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;