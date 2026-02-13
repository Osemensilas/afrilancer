import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/VerifyEmail.module.css";

const VerifyEmail = () => {
    return ( 
        <>
        <section id="verify" className={styles.verifySection}>
            <div classNameName={styles.registerHeader}>
                <div className={styles.logoContainer}>
                    <img src="/afrilancer-logo.png" alt="" className={styles.logoImg} />
                </div>
            </div>
            <div className={styles.verify}>
                <div className={styles.imgContainer}>
                    <img src="#" alt="" className={styles.emialImg} />
                </div>
                <div className={styles.verifyTop}>
                    <p>We just sent a verification link to osemensilas@gmail.com, Please check your mail box to verify your email address and continue.</p>
                </div>
                <div className={styles.verifyBottom}>
                    <a href="#" className={styles.didRecieve}>did't recieve mail?</a>
                    <a href="mailto:osemensilas@gmail.com?Subject=upport" target="_blank" className={styles.checkMailBox}>Open Mail Box</a>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default VerifyEmail;