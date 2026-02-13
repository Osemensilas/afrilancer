import styles from "../../styles/createAccount.module.css"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Client = () => {

    const searchParams = useSearchParams();

    const regType = searchParams.get('account');

    const [freelancer, setFreelancer] = useState(false);
    const [hirer, setHirer] = useState(false);
    const [formText, setFormText] = useState("");
    const [msgSent, setMsgSent] = useState(false);

    useEffect(() => {
        if (!regType) return;

        if (regType === "client"){
            setHirer(true);
            setFreelancer(false);
            setFormText("Register to begin Talent Search");
        }

        if (regType === "freelancer"){
            setHirer(false);
            setFreelancer(true);
            setFormText("Register to begin Searching for Jobs");
        }
    },[regType])

    return ( 
        <>
        <section id="create-account" className={styles.createAccountSection}>
            <div className={styles.createAccountHeader}>
                <div className={styles.logoContainer}>
                    <img src="/afrilancer-logo.png" alt="" className={styles.logoImg} />
                </div>

                <div className={styles.createAaccountHeaderLeft}>
                    <div className={`${styles.freelancerJoin} ${freelancer ? "hidden" : ""}`}>
                        Searcing for job? <a href="#">Join as Freelancer</a>
                    </div>
                    <div className={`${styles.freelancerJoin} ${hirer ? "hidden" : ""}`}>
                        Want to hire talent? <a href="#">Join as Client</a>
                    </div>
                </div>
            </div>

            <div className={styles.createAccount}>
                <form action="#" className={`${styles.createAcountForm} ${msgSent ? "hidden" : ""}`}>
                    <div className={styles.formHeader}>
                        <h1>{formText}</h1>
                    </div>

                    <div className={styles.formContent}>
                        <div className={styles.detailsContainer}>
                            <div className={styles.details}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" className={styles.detail} />
                                <div className={styles.error}>Invalie Input</div>
                            </div>

                            <div className={styles.details}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" className={styles.detail} />
                                <div className={styles.error}></div>
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.details}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" className={styles.detail} />
                                <div className={styles.error}></div>
                            </div>

                            <div className={styles.details}>
                                <label htmlFor="country">Country</label>
                                <select name="country" id="country" className={styles.detail}>
                                    <option value="ghana">Ghana</option>
                                    <option value="nigeria">Nigeria</option>
                                    <option value="south africa">South Africa</option>
                                </select>
                                <div className={styles.error}></div>
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.details}>
                                <label htmlFor="password1">Password</label>
                                <input type="password" id="password1" className={styles.detail} />
                                <div className={styles.error}></div>
                            </div>

                            <div className={styles.details}>
                                <label htmlFor="password2">Confirm Password</label>
                                <input type="password" id="password2" className={styles.detail} />
                                <div className={styles.error}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.termsContainers}>
                        <div className={styles.termsContainer}>
                            <input
                                type="checkbox"
                                name="email_agreement"
                                id="email-me"
                                title="email-me"
                                defaultChecked
                            />
                            <div className={styles.termsDetails}>
                                Send me emails with tips on how to find talent that fits my needs.
                            </div>
                        </div>

                        <div className={styles.termsContainer}>
                            <input
                                type="checkbox"
                                name="terms_agreement"
                                id="terms"
                                title="terms-of-service"
                            />
                            <div className={styles.termsDetails}>
                                Yes, I understand and agree will{" "}
                                <a href="#">Afrilancer Terms of Service</a>, including the{" "}
                                <a href="#">user Agreement</a>, and{" "}
                                <a href="#">Privecy Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.submitBtnContainer}>
                        <input
                            type="submit"
                            className={styles.submitBtn}
                            value="Create Account"
                        />
                    </div>

                    <div className={styles.alreadyContainer}>
                        Already have an account? <Link href="/signin">Sign In</Link>
                    </div>
                </form>

                <div className={`${styles.emailConfirmationActive} ${msgSent ? "" : "hidden"}`}>
                    <p>
                        Thank your for your interest in joining Afrilancer, We sent a
                        confirmation message to your email address. Please confirm to
                        set up your account.
                    </p>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Client;