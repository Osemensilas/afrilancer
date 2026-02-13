import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Signin.module.css";
import { useEffect, useState } from 'react';

const Reset = () => {

    const [msgSent, setMsgSent] = useState(false);

    return ( 
        <>
        <section id="signin" className={styles.signinSection}>
            <div className={styles.registerHeader}>
                <div className={styles.logoContainer}>
                    <img
                        src="/afrilancer-logo.png"
                        alt=""
                        className={styles.logoImg}
                    />
                </div>
            </div>

            <div className={styles.signin}>
                <form action="#" className={`${styles.signinForm} ${msgSent ? "hidden" : ""}`}>
                    <div className={styles.formHeader}>
                        <h1>Update your password</h1>
                    </div>

                    <div className={styles.formContent}>
                        <div className={styles.details}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className={styles.detail} id="email" />
                            <div className={styles.error}>invalid email address</div>
                        </div>
                    </div>

                    <div className={styles.formSubmitBtnContainer}>
                        <input
                            type="submit"
                            className={styles.submitBtn}
                            value="Send Email"
                        />
                    </div>
                </form>

                <div className={`${styles.emailConfirmation} ${msgSent ? "" : "hidden"}`}>
                    <p>A reset link has been sent to your email.</p>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Reset;