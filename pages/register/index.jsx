import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Register.module.css";
import { useState } from 'react';
import { useRouter } from "next/router";

const Register = () => {

    const router = useRouter();

    const [freelancer, setFreelancer] = useState(false);
    const [hirer, setHirer] = useState(false);
    const [registerText, setRegisterText] = useState("Create Account");

    const hirerClicked = () => {
        setHirer(true);
        setFreelancer(false);
        setRegisterText("Register as Client");
    }

    const freelancerClicked = () => {
        setHirer(false);
        setFreelancer(true);
        setRegisterText("Register as Freelancer");
    }

    const regClicked = (e) => {
        const innerText = e.currentTarget.children[0].innerText;

        if (innerText === "Register as Client"){
            router.push("/register/create-account?account=client")
        }

        if (innerText === "Register as Freelancer"){
            router.push("/register/create-account?account=freelancer")
        }
    }

    return ( 
        <>
        <section id="register" className={styles.registerSection}>
            <div className={styles.registerHeader}>
                <div className={styles.logoContainer}>
                <Image
                    src="/afrilancer-logo.png"
                    alt="Afrilancer logo"
                    fill
                    className={styles.logoImg}
                />
                </div>
            </div>

            <div className={styles.register}>
                <div className={styles.registerTop}>
                <h1>Join Afrilancer as a Client or Freelancer for Free</h1>
                </div>

                <div className={styles.registerBottom}>
                {/* Client Card */}
                <div className={styles.registerBottomRight} onClick={hirerClicked}>
                    <div className={`${styles.clientCard} ${hirer ? styles.active : ""}`}>
                        <div className={styles.cardTop}>
                            <div className={styles.cardTopLeft}>
                            <div className={styles.cardImgContainer}>
                                <i className="fa fa-user"></i>
                            </div>
                            </div>

                            <div className={styles.cardTopRight}>
                            <div className={styles.checkIcon}></div>
                            </div>
                        </div>

                        <div className={styles.cardBottom}>
                            <p>I am a client hiring for a project</p>
                        </div>
                    </div>
                </div>

                {/* Freelancer Card */}
                <div className={styles.registerBottomLeft} onClick={freelancerClicked}>
                    <div className={`${styles.clientCard} ${freelancer ? styles.active : ""}`}>
                        <div className={styles.cardTop}>
                            <div className={styles.cardTopLeft}>
                                <div className={styles.cardImgContainer}>
                                    <i className="fa fa-laptop-code"></i>
                                </div>
                            </div>

                            <div className={styles.cardTopRight}>
                            <div className={styles.checkIcon}></div>
                            </div>
                        </div>

                        <div className={styles.cardBottom}>
                            <p>I am a freelancer looking for a job</p>
                        </div>
                    </div>
                </div>
                </div>

                <button type="button" onClick={regClicked} className={`${styles.registerCtaContainer} ${freelancer || hirer ? styles.active : ""}`}>
                    <p>{registerText}</p>
                </button>

                <div className={styles.registerAlreadyAccountContainer}>
                Already a member? <Link href="/signin">Sign In</Link>
                </div>
            </div>
            </section>
        </>
     );
}
 
export default Register;