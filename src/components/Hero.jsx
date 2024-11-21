import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={styles.heroIntro}>
        <div className={`${styles.heroIntroText} flow`}>
          <h1>
            Hi, I&apos;m <span>Sarasraman</span> <br />
            Welcome to my <br />
            <span>Portfolio</span>
          </h1>
          <div className={styles.btnContainer}>
            <a href="#about">About Me</a>
            <a href="#contact">Contact Me</a>
          </div>
          <p>Open To Opportunity</p>
        </div>
      </div>
      <div className={`${styles.heroImg} mobile-hidden`}>
        <img src="/assets/img/hero-img.png" alt="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
