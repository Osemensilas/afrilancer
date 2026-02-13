import styles from "../../../styles/Create.module.css";
import { useEffect, useState } from "react";

const AccountSetUp = () => {

    const [activeNum, setActiveNum] = useState(0);

    const goLeft = () => {
        setActiveNum((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const goRight = () => {
        setActiveNum((prev) => (prev === 2 ? 0 : prev + 1));
    };


    return ( 
        <>
        <section id="create-account" className={styles.createAccountSection}>
            <div className={styles.registerHeader}>
                <div className={styles.logoContainer}>
                <img
                    src="/afrilancer-logo.png"
                    alt=""
                    className={styles.logoImg}
                />
                </div>
            </div>

            <div className={styles.createAccount}>
                <div className={styles.createAccountTop}>
                <div className={styles.createAccountTopLeft}>
                    <div className={styles.createAccountHeader}>
                    <h2>
                        Hello Osemen, Complete your profile so we can match you to jobs that
                        are suitable for you and you can start earning
                    </h2>
                    </div>

                    <div className={styles.createAccountContent}>
                    <div className={styles.createAccountContentCards}>
                        <div className={styles.cardImgContainer}>
                        <img
                            src="/man.png"
                            alt=""
                            className={styles.cardImg}
                        />
                        </div>
                        <p>Start by building a profile that match your skill</p>
                    </div>

                    <div className={styles.createAccountContentCards}>
                        <div className={styles.cardImgContainer}>
                        <img
                            src="/work.png"
                            alt=""
                            className={styles.cardImg}
                        />
                        </div>
                        <p>Next being applyin for jobs you love to do</p>
                    </div>

                    <div className={styles.createAccountContentCards}>
                        <div className={styles.cardImgContainer}>
                        <img
                            src="/mobile.png"
                            alt=""
                            className={styles.cardImg}
                        />
                        </div>
                        <p>Get paid for jobs completed</p>
                    </div>
                    </div>
                </div>

                <div className={styles.createAccountTopRight}>
                    <div className={styles.userConfidenceContainer}>
                    <div className={styles.userGoLeft} onClick={goLeft}>
                        <i className="fa fa-angle-left" />
                    </div>

                    <div className={styles.userCardsContainer}>
                        {/* User Card 1 */}
                        <div className={`${styles.userCard} ${activeNum === 0 ? "" : "hidden"}`}>
                            <div className={styles.userCardTop}>
                                <div className={styles.userImgContainer}>
                                <div className={styles.userAvailability} />
                                <img
                                    src="/hero (4) - Copy-minnew.jpg"
                                    alt=""
                                    className={styles.userImg}
                                />
                                </div>
                            </div>

                            <div className={styles.userCardMiddle}>
                                <h3>Osemen O.</h3>
                                <p>Expert Web Developer</p>

                                <div className={styles.clientRateContainer}>
                                <div className={styles.clientRate}>
                                    <i className="fa fa-star-o" />
                                    <p>4.91</p>
                                </div>
                                <div className={styles.clientRate}>
                                    <p>NGN 15000 / hr</p>
                                </div>
                                <div className={styles.clientRate}>
                                    <i className="fa fa-tasks" />
                                    <p>23 jobs</p>
                                </div>
                                </div>
                            </div>

                            <div className={styles.userCardBottom}>
                                <p>
                                Since I joined Afreelance, I now get jobs that match my talent
                                and also I earn more money to cater for my needs.
                                </p>
                            </div>
                        </div>

                        {/* User Card 2 */}
                        <div className={`${styles.userCard} ${activeNum === 1 ? "" : "hidden"}`}>
                            <div className={styles.userCardTop}>
                                <div className={styles.userImgContainer}>
                                <div className={styles.userAvailability} />
                                <img
                                    src="/ahbie.jpg"
                                    alt=""
                                    className={styles.userImg}
                                />
                                </div>
                            </div>

                            <div className={styles.userCardMiddle}>
                                <h3>Abigail O.</h3>
                                <p>Content Writer</p>

                                <div className={styles.clientRateContainer}>
                                <div className={styles.clientRate}>
                                    <i className="fa fa-star-o" />
                                    <p>4.84</p>
                                </div>
                                <div className={styles.clientRate}>
                                    <p>USD 50 / hr</p>
                                </div>
                                <div className={styles.clientRate}>
                                    <i className="fa fa-tasks" />
                                    <p>14 jobs</p>
                                </div>
                                </div>
                            </div>

                            <div className={styles.userCardBottom}>
                                <p>
                                Since I joined Afreelance, I now get jobs that match my talent
                                and also I earn more money to cater for my family.
                                </p>
                            </div>
                        </div>

                        {/* User Card 3 */}
                        <div className={`${styles.userCard} ${activeNum === 2 ? "" : "hidden"}`}>
                            <div className={styles.userCardTop}>
                                <div className={styles.userImgContainer}>
                                <div className={styles.userAvailability} />
                                <img
                                    src="/Screenshot (403).png"
                                    alt=""
                                    className={styles.userImg}
                                />
                                </div>
                            </div>

                            <div className={styles.userCardMiddle}>
                                <h3>Patricia V.</h3>
                                <p>Virtual Assistance</p>

                                <div className={styles.clientRateContainer}>
                                <div className={styles.clientRate}>
                                    <i className="fa fa-star-o" />
                                    <p>4.8</p>
                                </div>
                                <div className={styles.clientRate}>
                                    <p>ZAR 60 / hr</p>
                                </div>
                                <div className={styles.clientRate}>
                                    <i className="fa fa-tasks" />
                                    <p>33 jobs</p>
                                </div>
                                </div>
                            </div>

                            <div className={styles.userCardBottom}>
                                <p>
                                Since I joined Afreelance, I now get jobs that match my talent
                                and also I earn more money to cater for my family.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.userGoRight} onClick={goRight}>
                        <i className="fa fa-angle-right" />
                    </div>
                    </div>
                </div>
                </div>

                <div className={styles.createAccountBottom}>
                <a href="#" className={`${styles.navBtn} ${styles.active}`}>
                    Back
                </a>
                <input
                    type="submit"
                    className={styles.navBtn}
                    value="Get Started"
                />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountSetUp;