import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { useRouter } from "next/router";

const Footer = () => {

    const router = useRouter();
    const currentPath = router.pathname;

    return ( 
        <>
        <footer id="footer" className={`${
            currentPath === "/register" ? "hidden" : "" ||
            currentPath === "/register/create-account" ? "hidden" : "" ||
            currentPath === "/signin" ? "hidden" : "" ||
            currentPath === "/reset" ? "hidden" : "" ||
            currentPath === "/reset/verify-email" ? "hidden" : "" ||
            currentPath === "/reset/update-password" ? "hidden" : "" ||
            currentPath === "/freelancer/account-setup" ? "hidden" : "" ||
            currentPath === "/freelancer/account-setup/categories" ? "hidden" : ""
            }`}>
            <div className={styles.footer}>
                {/* Top */}
                <div className={styles.footerTop}>
                    <div className={styles.footerTopNavigation}>
                        <div className={styles.footerNavigationContainer}>
                            <h3>For Client</h3>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                        </div>

                        <div className={styles.footerNavigationContainer}>
                            <h3>For Freelancer</h3>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                        </div>

                        <div className={styles.footerNavigationContainer}>
                            <h3>Resources</h3>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                        </div>

                        <div className={styles.footerNavigationContainer}>
                            <h3>Afrilancer</h3>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                            <Link href="#" className={styles.footerLink}>How to Hire</Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className={styles.footerTopSocials}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialIconsContainer}>
                            <a href="#" className={styles.socialIcon} title="Instagram">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#" className={styles.socialIcon} title="Facebook">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#" className={styles.socialIcon} title="Twitter">
                                <i className="fa fa-twitter-square"></i>
                            </a>
                            <a href="#" className={styles.socialIcon} title="LinkedIn">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomLeft}>
                        <p>© 2023 - 2024 Afrilancer</p>
                    </div>

                    <div className={styles.footerBottomRight}>
                        <Link href="#" className={styles.privacyPolicy}>Terms of Service</Link>
                        <Link href="#" className={styles.privacyPolicy}>Privacy Policies</Link>
                        <Link href="#" className={styles.privacyPolicy}>Cookies Settings</Link>
                        <Link href="#" className={styles.privacyPolicy}>Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;