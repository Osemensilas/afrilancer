import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();
    const currentPath = router.pathname;

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
                <div className={styles.headerRight}>
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
                        <div className={styles.headerSignUp}>
                            <ul className={styles.menu}>
                            <li className={styles.menuContent}>
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