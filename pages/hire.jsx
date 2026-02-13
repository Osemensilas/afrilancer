import styles from "../styles/Hirer.module.css";

const Hirer = () => {
    return ( 
        <>
        {/* Hero Begins */}
        <section id="hero" className={styles.heroSection}>
            <div className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>Get expert help for your projects without the hassle</h1>
                    <p>
                        With a pool of talented professionals in various fields, we've got
                        you covered. From writing and design to programming and consulting,
                        our freelancers are dedicated to delivering high-quality work.
                    </p>

                    <div className={styles.heroCallToActionContainer}>
                        <a href="#" className={styles.heroCta}>Get Started</a>
                    </div>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.heroRightImgContainer}>
                        <img
                            src="/partnership-concept-illustration.png"
                            alt=""
                            className={styles.heroImg}
                        />
                    </div>
                </div>
            </div>
        </section>
        {/* Hero Ends */}

        {/* Access Begins */}
        <section id="access" className={styles.accessSection}>
            <div className={styles.access}>
                <div className={styles.accessLeft}>
                    <div className={styles.accessImgContainer}>
                        <img
                            src="/gradient-career-cushioning-illustration.png"
                            alt=""
                            className={styles.accessImg}
                        />
                    </div>
                </div>

                <div className={styles.accessRight}>
                    <div className={styles.accessRightHeader}>
                        <h2>Unlock Access to Top Talent</h2>
                    </div>

                    <div className={styles.accessRightContent}>
                        <p>
                            Register as a client with us and discover a world of exceptional
                            skills and expertise. Our pool of talented professionals is ready
                            to help you bring your projects to life.
                        </p>
                        <p>By signing up, you'll get:</p>
                    </div>

                    <div className={styles.hireTalentRightContent}>
                        <div className={styles.hireTalentRightContentImgContainer}>
                            <img
                                src="/access-control.png"
                                alt=""
                                className={styles.hireTalentRightContentImg}
                            />
                        </div>
                        <div className={styles.hireTalentRightContentDetails}>
                            <div className={styles.hireTalentRightContentDetailsHeader}>
                                <h3>Access to a curated network of skilled professionals</h3>
                                <p>Post your project and we show them to top talents for you</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.hireTalentRightContent}>
                        <div className={styles.hireTalentRightContentImgContainer}>
                            <img
                                src="/post.png"
                                alt=""
                                className={styles.hireTalentRightContentImg}
                            />
                        </div>
                        <div className={styles.hireTalentRightContentDetails}>
                            <div className={styles.hireTalentRightContentDetailsHeader}>
                                <h3>
                                    Ability to post projects and receive bids from qualified
                                    talent
                                </h3>
                                <p>Post your project and we show them to top talents for you</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.hireTalentRightContent}>
                        <div className={styles.hireTalentRightContentImgContainer}>
                            <img
                                src="/choose.png"
                                alt=""
                                className={styles.hireTalentRightContentImg}
                            />
                        </div>
                        <div className={styles.hireTalentRightContentDetails}>
                            <div className={styles.hireTalentRightContentDetailsHeader}>
                                <h3>Flexible hiring options to suit your needs and budget</h3>
                                <p>Post your project and we show them to top talents for you</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.hireTalentRightContent}>
                        <div className={styles.hireTalentRightContentImgContainer}>
                            <img
                                src="/24-hours-support.png"
                                alt=""
                                className={styles.hireTalentRightContentImg}
                            />
                        </div>
                        <div className={styles.hireTalentRightContentDetails}>
                            <div className={styles.hireTalentRightContentDetailsHeader}>
                                <h3>Quality assurance and support from our team</h3>
                                <p>Post your project and we show them to top talents for you</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.hireTalentRightCtaContainer}>
                        <a href="#" className={styles.hireTalentRightSignup}>
                            Register for free
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* Access Ends */}

        </>
     );
}
 
export default Hirer;