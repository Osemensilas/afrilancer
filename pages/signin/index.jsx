import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Signin.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignIn = () => {

    const route = useRouter();

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const signinClicked = async () => {

        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!formData.email || !formData.password){
            setError("All fields required");
            return;
        }

        if (!emailVal.test(formData.email)){
            setError("Invalid email address");
            return;
        }

        setError("");

        let url = "http://localhost:5067/api/auth/login";

        try{
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === "success" && response.data.user_type === "freelancer"){
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));

                route.push("/freelancer/find-job")
            }

            if (response.data.status === "success" && response.data.user_type === "client"){
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));

                route.push("/client/");
            }

            if (response.data.status === "error"){
                setError(response.data.message);
            }
        }catch(error){
            console.log("Error sending data: ", error);
        }
    }

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
                <form action="#" onSubmit={(e) => e.preventDefault()} className={styles.signinForm}>
                    <div className={styles.formHeader}>
                        <h1>Login to Afrilancer</h1>
                    </div>
                    <div className={`${styles.error} ${error ? "" : "hidden"}`}>{error}</div>
                    <div className={styles.formContent}>
                        <div className={styles.details}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChanged} className={styles.detail} id="email" />
                        </div>

                        <div className={styles.details}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChanged} className={styles.detail} id="password" />
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
                            onClick={signinClicked}
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