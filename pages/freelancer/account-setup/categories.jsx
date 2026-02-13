import { useState } from "react";
import styles from "../../../styles/Categories.module.css";

const Categories = () => {

    const [activeNum, setActiveNum] = useState(null);

    const dataScience = (e) => {
        setActiveNum(0)
    }

    const design = () => {
        setActiveNum(1);
    }

    const web = () => {
        setActiveNum(2);
    }
    return ( 
        <>
        <section id="create-account" className={styles.createAccountSection}>
            <div className={styles.registerHeader}>
                <div className={styles.logoContainer}>
                <img
                    src="/afrilancer-logo.png"
                    alt="Afrilancer logo"
                    className={styles.logoImg}
                />
                </div>
            </div>

            <div className={styles.createAccount}>
                <div className={styles.createAccountTop}>
                    {/* LEFT */}
                    <div className={styles.createAccountTopLeft}>
                        <div className={styles.createAccountHeader}>
                            <h2>Select a Category</h2>
                        </div>

                        <div className={styles.createAccountTopLeftContent}>
                            <div className={styles.categoryContent}>
                                <p onClick={dataScience} className={`${activeNum === 0 ? "text-primary" : ""}`}>Data Science & Analytics</p>
                                <p onClick={design} className={`${activeNum === 1 ? "text-primary" : ""}`}>Design & Creative</p>
                                <p onClick={web} className={`${activeNum === 2 ? "text-primary" : ""}`}>Web, Mobile, & Software Dev</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={styles.createAccountTopRight}>
                        <div className={styles.categoryLeftHeader}>
                            <h3>Select 1 to 3 specialty</h3>
                        </div>

                        <div className={`${activeNum === 0 ? "" : "hidden"}`}>
                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="data_analysis" id="data_analysis" />
                                <label htmlFor="data_analysis">Data Analysis & Testing</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="data_extraction" id="data_extraction" />
                                <label htmlFor="data_extraction">Data Extraction / ETL</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="data_mining" id="data_mining" />
                                <label htmlFor="data_mining">Data Mining & Management</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="ai" id="ai" />
                                <label htmlFor="ai">AI & Machine Learning</label>
                            </div>
                        </div>

                        <div className={`${activeNum === 1 ? "" : "hidden"}`}>
                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="arts" id="arts" />
                                <label htmlFor="arts">Arts & Illustration</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="music_production" id="music_production" />
                                <label htmlFor="music_production">Audio & Music Production</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="branding" id="branding" />
                                <label htmlFor="branding">Branding & Logo Design</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="nft" id="nft" />
                                <label htmlFor="nft">NFT, AR/VR & Game Art</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="graphics" id="graphics" />
                                <label htmlFor="graphics">Graphics, Editorial & Presentation Design</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="performing_art" id="performing_art" />
                                <label htmlFor="performing_art">Performing Art</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="photography" id="photography" />
                                <label htmlFor="photography">Photography</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="product_design" id="product_design" />
                                <label htmlFor="product_design">Product Design</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="video_animation" id="video_animation" />
                                <label htmlFor="video_animation">Video & Animation</label>
                            </div>
                        </div>

                        <div className={`${activeNum === 2 ? "" : "hidden"}`}>
                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="blockchain" id="blockchain" />
                                <label htmlFor="blockchain">Blockchain, NFT, & Cryptocurrency</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="ai_apps" id="ai_apps" />
                                <label htmlFor="ai_apps">AI Apps & Integration</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="desktop_application" id="desktop_application" />
                                <label htmlFor="desktop_application">Desktop Application Development</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="ecommerce_development" id="ecommerce_development" />
                                <label htmlFor="ecommerce_development">Ecommerce Development</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="game_design" id="game_design" />
                                <label htmlFor="game_design">Game Design & Development</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="mobile_development" id="mobile_development" />
                                <label htmlFor="mobile_development">Mobile Development</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="other_software" id="other_software" />
                                <label htmlFor="other_software">Other - Software Development</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="scrum" id="scrum" />
                                <label htmlFor="scrum">Project Management & Scrum</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="qa_testing" id="qa_testing" />
                                <label htmlFor="qa_testing">QA Testing</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="script_utilities" id="script_utilities" />
                                <label htmlFor="script_utilities">Script & Utilities</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="web_design" id="web_design" />
                                <label htmlFor="web_design">Web & Mobile Design</label>
                            </div>

                            <div className={styles.userCategoryContent}>
                                <input type="checkbox" name="web_development" id="web_development" />
                                <label htmlFor="web_development">Web Development</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.createAccountBottom}>
                <a href="#" className={`${styles.navBtn} ${styles.active}`}>
                    Back
                </a>

                <div className={styles.nextContainer}>
                    <a href="#" className={styles.skipStep}>
                    Skip this step
                    </a>

                    <input
                    type="submit"
                    value="Next, Add Skill"
                    className={styles.navBtn}
                    />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Categories;