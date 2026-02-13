import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomeSections() {

  const talents = [
      {
        title: "Development & IT",
        skills: "1556 skills",
        href: "#",
      },
      {
        title: "Design & Creative",
        skills: "982 skills",
        href: "#",
      },
      {
        title: "Writing & Translation",
        skills: "734 skills",
        href: "#",
      },
      {
        title: "Sales & Marketing",
        skills: "621 skills",
        href: "#",
      },
      {
        title: "Finance & Accounting",
        skills: "410 skills",
        href: "#",
      },
      {
        title: "Engineering",
        skills: "289 skills",
        href: "#",
      },
      {
        title: "Admin Support",
        skills: "198 skills",
        href: "#",
      },
      {
        title: "Customer Service",
        skills: "356 skills",
        href: "#",
      },
    ];

  return (
    <>
      {/* Hero Begins */}
      <section id="hero" className={styles.heroSection}>
        <div className={styles.heroLine}></div>

        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.heroContent}>
              <div className={styles.heroHeader}>
                <h2>
                  Work should work from <br /> anywhere
                </h2>
              </div>

              <div className={styles.heroContentDetail}>
                <p>Connect with people who can get your work done.</p>
              </div>

              <div className={styles.heroCtaContainer}>
                <Link href="/register" className={styles.heroCta}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImgContainer}>
              <Image
                src="/portrait-happy-african-man-dressed-plaid-shirt.png"
                alt="hero-img"
                width={500}
                height={500}
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Ends */}

      {/* What we do Begins */}
      <section id="hire-talent" className={styles.hireTalentSection}>
        <div className={styles.partnersContainer}>
          <div className={styles.partnersHeader}>
            <h3 className={styles.primaryColor}>We are trusted by</h3>
          </div>

          <div className={styles.heroPartnerContainer}>
            <div className={styles.heroPartnerImgContainer}></div>
            <div className={styles.heroPartnerImgContainer}></div>
            <div className={styles.heroPartnerImgContainer}></div>
            <div className={styles.heroPartnerImgContainer}>
              <Image
                src="/ossilhost-logo.png"
                alt="partner"
                width={150}
                height={60}
                className={styles.heroPartnerImg}
              />
            </div>
          </div>
        </div>

        <div className={styles.hireTalentUsTop}>
          <div className={styles.hireTalentLeft}>
            <div className={styles.hireTalentLeftImgContainer}>
              <Image
                src="/hire-talent.jpg"
                alt="hire talent"
                width={500}
                height={500}
                className={styles.hireTalentImg}
              />
            </div>
          </div>

          <div className={styles.hireTalentRight}>
            <div className={styles.hireTalentRightHeader}>
              <h3>Post your project easily and get them executed</h3>
            </div>

            <div className={styles.hireTalentRightContents}>
              {/* Item 1 */}
              <div className={styles.hireTalentRightContent}>
                <div className={styles.hireTalentRightContentImgContainer}>
                  <Image
                    src="/document.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.hireTalentRightContentImg}
                  />
                </div>
                <div className={styles.hireTalentRightContentDetails}>
                  <h3>Join for free</h3>
                  <p>Register and start getting talents for your projects</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className={styles.hireTalentRightContent}>
                <div className={styles.hireTalentRightContentImgContainer}>
                  <Image
                    src="/post.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.hireTalentRightContentImg}
                  />
                </div>
                <div className={styles.hireTalentRightContentDetails}>
                  <h3>Post your project and get top talents</h3>
                  <p>
                    Post your project and we show them to top talents for you
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className={styles.hireTalentRightContent}>
                <div className={styles.hireTalentRightContentImgContainer}>
                  <Image
                    src="/expense.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.hireTalentRightContentImg}
                  />
                </div>
                <div className={styles.hireTalentRightContentDetails}>
                  <h3>Work with the best at your own budget</h3>
                  <p>
                    We make it easy for you to work with the best client at your
                    desired budget
                  </p>
                </div>
              </div>

              <div className={styles.hireTalentRightCtaContainer}>
                <Link
                  href="/register/create-account?account=client"
                  className={styles.hireTalentRightSignup}
                >
                  Register for free
                </Link>
                <Link
                  href="#"
                  className={styles.hireTalentRightLearnHire}
                >
                  Learn how to hire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What we do Ends */}

      {/* Browse Talent Begins */}
      <section id="browse-talent" className={styles.browseTalentSection}>
        <div className={styles.browseTalentHeader}>
          <h2>Browse talents by category</h2>
        </div>

        <div className={styles.browseTalent}>
          {
          talents.map((talent, index) => (
             <Link
              href={talent.href}
              key={index}
              className={styles.browseTalentCard}
            >
              <div className={styles.browseTalentCardHeader}>
                <h3>{talent.title}</h3>
              </div>

              <div className={styles.browseTalentContent}>
                <p>{talent.skills}</p>
              </div>
            </Link>
          ))
          }
        </div>
      </section>
      {/* Browse Talent Ends */}

      {/* Why Begins */}
      <section id="why" className={styles.whySection}>
        <div className={styles.whyLeft}>
          <h2>Why Choose Afrilancer?</h2>

          <div className={styles.whyLeftContainer}>
            <div className={styles.whyLeftContent}>
              <div className={styles.whyImgMainContianer}>
                <Image
                  src="/favorites.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.whyLeftImg}
                />
              </div>
              <div>
                <h3>Proof of quality</h3>
                <p>
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </p>
              </div>
            </div>

            <div className={styles.whyLeftContent}>
              <div className={styles.whyImgMainContianer}>
                <Image
                  src="/tagging.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.whyLeftImg}
                />
              </div>
              <div>
                <h3>No cost until you hire</h3>
                <p>
                  Interview potential clients and only pay for approved work
                </p>
              </div>
            </div>

            <div className={styles.whyLeftContent}>
              <div className={styles.whyImgMainContianer}>
                <Image
                  src="/security.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.whyLeftImg}
                />
              </div>
              <div>
                <h3>Safe and Secure</h3>
                <p>
                  We protect your data and privacy with 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.whyRight}>
          <h2>We are the best African marketplace.</h2>

          <div className={styles.ratingsContainer}>
            <div className={styles.ratingImgContainer}>
              <Image
                src="/star.png"
                alt=""
                width={30}
                height={30}
                className={styles.ratingImg}
              />  
            </div>
            <h3 className={styles.ratingDetails}>4.9/5</h3>
          </div>

          <p>Clients rate our professionals on Afrilancer</p>
        </div>
      </section>
      {/* Why Ends */}
      {/*For talents begins*/}
      <section id="talents" className={styles.talentsSection}>
          <div className={styles.talents}>
              <div className={styles.talentsLeft}>
                  <Image src="/freelancer2.jpg" fill alt="" className={styles.talentsImg} />
              </div>
              <div className={styles.talentsRight}>
                  <h3>Freelancers</h3>
                  <h2>Find Jobs that sooth your talent</h2>
                  <p>Meet clients you’re excited to work with and take your career or business to new heights.</p>
                  <Link href="#" className={styles.talentCta}>Find Jobs</Link>
              </div>
          </div>
      </section>
      {/*for talents emds*/}
    </>
  );
}
