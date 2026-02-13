import styles from "../../styles/Signin.module.css";

const UpdatePassword = () => {
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
                    <h2>Update your password</h2>
                </div>

                <div className={styles.formContent}>
                    <div className={styles.details}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={styles.detail}
                        id="password"
                    />
                    <div className={styles.error}>invalid email address</div>
                    </div>

                    <div className={styles.details}>
                    <label htmlFor="password1">Confirm Password</label>
                    <input
                        type="password"
                        className={styles.detail}
                        id="password1"
                    />
                    <div className={styles.error}>invalid email address</div>
                    </div>
                </div>

                <div className={styles.formSubmitBtnContainer}>
                    <input
                    type="submit"
                    className={styles.submitBtn}
                    value="Update"
                    />
                </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default UpdatePassword;