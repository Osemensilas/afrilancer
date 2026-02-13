import styles from "../styles/Hirer.module.css";

const Worker = () => {
    return ( 
        <>
        {/* Hero Begins */}
        <section id="hero" className={styles.heroSection}>
            <div className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>Ditch the commute and find freedom in remote work!</h1>
                    <p>
                        Join our community and work on projects that ignite your passion.
                        Work from Anywhere, Love What You Do.
                    </p>

                    <div className={styles.heroCallToActionContainer}>
                        <a href="#" className={styles.heroCta}>Get Started</a>
                    </div>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.heroRightImgContainer}>
                        <img
                            src="/gradient-literature-illustration.png"
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
                            src="/copywriting-illustration.png"
                            alt=""
                            className={styles.accessImg}
                        />
                    </div>
                </div>

                <div className={styles.accessRight}>
                    <div className={styles.accessRightHeader}>
                        <h2>Turn Your Passion into Your Career</h2>
                    </div>

                    <div className={styles.accessRightContent}>
                        <p>
                            Are you tired of feeling unfulfilled in your work? Do you dream
                            of doing something that sparks joy and excitement?
                        </p>
                        <p>
                            It's time to take the leap and start doing the jobs you love,
                            the way you love!
                        </p>
                        <p>With us, you can:</p>
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
                                <h3>Pursue your passions and turn them into a career</h3>
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
                                    Work on projects that align with your values and interests
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
                                <h3>Enjoy flexible and fulfilling work arrangements</h3>
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
                                <h3>Unlock your full potential and achieve your dreams</h3>
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
 
export default Worker;