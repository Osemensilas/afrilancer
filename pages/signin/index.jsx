import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Signin.module.css";

const SignIn = () => {
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
                <form action="#" className={styles.signinForm}>
                    <div className={styles.formHeader}>
                        <h1>Login to Afrilancer</h1>
                    </div>

                    <div className={styles.formContent}>
                        <div className={styles.details}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className={styles.detail} id="email" />
                            <div className={styles.error}>invalid email address</div>
                        </div>

                        <div className={styles.details}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className={styles.detail} id="password" />
                            <div className={styles.error}>invalid email address</div>
                        </div>
                    </div>

                    <div className={styles.dontHave}>
                        Dont't have an account?<br /> <Link href="/register">Become a member</Link>
                    </div>

                    <div className={styles.formSubmitBtnContainer}>
                        <input
                            type="submit"
                            className={styles.submitBtn}
                            value="Sign In"
                        />
                    </div>

                    <div className={styles.forget}>
                        <Link href="/reset">Forget Password?</Link>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default SignIn;