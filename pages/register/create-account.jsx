import styles from "../../styles/createAccount.module.css"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Client = () => {

    const route = useRouter();

    const searchParams = useSearchParams();

    const regType = searchParams.get('account');

    const [freelancer, setFreelancer] = useState(false);
    const [hirer, setHirer] = useState(false);
    const [formText, setFormText] = useState("");
    const [msgSent, setMsgSent] = useState(false);
    const [terms, setTerms] = useState(false);
    const [mailTips, setMailTips] = useState(true);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        country: '',
        password1: '',
        password2: '',
        acctType: regType,
    })

    const handleChanged = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const termsChanged = () => {
        if (!terms){
            setTerms(true);
        }else{
            setTerms(false);
        }
    }

    const changeMailTips = () => {
        if (!mailTips){
            setMailTips(true);
        }else{
            setMailTips(false);
        }
    }

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

    const submitBtnClicked = () => {
        if (regType === "freelancer"){
            createUserAccount("freelancer");
            setMailTips(false);
        }else{
            createUserAccount("client");
        }
    }

    async function createUserAccount(acctType){

        let nameValue = /^[a-zA-Z]+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!formData.firstname || !formData.lastname || !formData.email || !formData.country || !formData.password1 || !formData.password2){
            setError("All Field Required");
            return;
        }

        if (!nameValue.test(formData.firstname)){
            setError("Invalid first name");
            return;
        }

        if (!nameValue.test(formData.lastname)){
            setError("Invalid first name");
            return;
        }

        if (!emailVal.test(formData.email)){
            setError("Invalid email");
            return;
        }

        if (formData.password1.length < 8){
            setError("Password must be atleast 8 characters");
            return;
        }

        if (formData.password1 !== formData.password2){
            setError("Passwords do not match");
            return;
        }

        if (!terms){
            setError("Agree to terms and conditions");
            return;
        }

        setError("");

        const payload = {
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            country: formData.country,
            password1: formData.password1,
            password2: formData.password2,
            mailTips: mailTips,
            accountType: formData.acctType,
        };

        try {
            let url = "http://localhost:5067/api/auth/register";

            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === "success"){
                route.push("/register/confirm-email");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const termsTextClicked = (e) => {
        const inputField = e.currentTarget.parentElement.children[0];

        if(!inputField.checked){
            inputField.checked = true;
            setTerms(true);
        }else{
            inputField.checked = false;
            setTerms(false);
        }
    }

    return ( 
        <>
        <section id="create-account" className={styles.createAccountSection}>
            <div className={styles.createAccountHeader}>
                <div className={styles.logoContainer}>
                    <img src="/afrilancer-logo.png" alt="" className={styles.logoImg} />
                </div>

                <div className={styles.createAaccountHeaderLeft}>
                    <div className={`${styles.freelancerJoin} ${freelancer ? "hidden" : ""}`}>
                        Searcing for job? <a href="/register/create-account?account=freelancer">Join as Freelancer</a>
                    </div>
                    <div className={`${styles.freelancerJoin} ${hirer ? "hidden" : ""}`}>
                        Want to hire talent? <a href="/register/create-account?account=client">Join as Client</a>
                    </div>
                </div>
            </div>

            <div className={styles.createAccount}>
                <form action="#" onSubmit={(e) => e.preventDefault()} className={`${styles.createAcountForm} ${msgSent ? "hidden" : ""}`}>
                    <div className={styles.formHeader}>
                        <h1>{formText}</h1>
                    </div>

                    <div className={styles.formContent}>
                        <div className={`${styles.error} ${error ? "" : "hidden"}`}>{error}</div>
                        <div className={styles.detailsContainer}>
                            <div className={styles.details}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" name="firstname" value={formData.firstname} onChange={handleChanged} id="firstname" className={styles.detail} />
                            </div>

                            <div className={styles.details}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" name="lastname" value={formData.lastname} onChange={handleChanged} id="lastname" className={styles.detail} />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.details}>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" value={formData.email} id="email" onChange={handleChanged} className={styles.detail} />
                            </div>

                            <div className={styles.details}>
                                <label htmlFor="country">Country</label>
                                <select name="country" value={formData.country} id="country" onChange={handleChanged} className={styles.detail}>
                                    <option value="">--Select Country--</option>
                                    <option value="ghana">Ghana</option>
                                    <option value="nigeria">Nigeria</option>
                                    <option value="south africa">South Africa</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.details}>
                                <label htmlFor="password1">Password</label>
                                <input type="password" name="password1" value={formData.password1} onChange={handleChanged} id="password1" className={styles.detail} />
                            </div>

                            <div className={styles.details}>
                                <label htmlFor="password2">Confirm Password</label>
                                <input type="password" name="password2" value={formData.password2} onChange={handleChanged} id="password2" className={styles.detail} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.termsContainers}>
                        <div className={`${styles.termsContainer} ${formData.acctType === "freelancer" ? styles.hide : ""}`}>
                            <input
                                type="checkbox"
                                name="email_agreement"
                                id="emailTips"
                                title="emailTips"
                                value={mailTips}
                                defaultChecked
                                onChange={changeMailTips}
                            />
                            <div className={styles.termsDetails}>
                                Send me emails with tips on how to find talent that fits my needs.
                            </div>
                        </div>

                        <div className={styles.termsContainer}>
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                title="terms-of-service"
                                value={terms}
                                onChange={termsChanged}
                            />
                            <div onClick={termsTextClicked} className={styles.termsDetails}>
                                Yes, I understand and agree will{" "}
                                <a href="#">Afrilancer Terms of Service</a>, including the{" "}
                                <a href="#">user Agreement</a>, and{" "}
                                <a href="#">Privecy Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.submitBtnContainer}>
                        <input type="submit" onClick={submitBtnClicked} className={styles.submitBtn} value="Create Account" />
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