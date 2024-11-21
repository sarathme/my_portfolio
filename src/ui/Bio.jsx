import styles from "./Bio.module.css";

function Bio() {
  return (
    <div className={`${styles.bioContainer} flow`}>
      <p>
        Hi everyone, I’m Sarasraman, a passionate Web Developer and Designer. I
        hold an Engineering degree with a major in Electrical and Electronics,
        which might seem weird for a web developer, so let me explain.
      </p>

      <p>
        I graduated as an Electrical Engineer in 2018. After graduation, I
        worked as a Technician at Johnsons Lifts Pvt Ltd. However, due to health
        issues, I had to leave that position after seven months. After
        recovering, I joined PiBeam Labs Pvt Ltd. as a Technician and Assembler.
        Things were going well until the Covid-19 pandemic forced me to return
        to my hometown, leaving me jobless.
      </p>
      <p>
        During this period, I decided to pivot my career towards something I had
        always been interested in Design and Technology. I started by learning
        graphic design with Adobe Illustrator, mastering the software to create
        visually appealing graphics. My interest in the digital world didn’t
        stop there. I soon ventured into web development, learning the basics
        and continually building on that foundation.
      </p>
      <p>
        While it hasn’t been an easy journey, my determination to succeed in the
        competitive field of web development keeps me learning and growing every
        day. This transition from a technical background in electrical
        engineering to web development and design is a testament to my
        adaptability and passion for technology.
      </p>
    </div>
  );
}

export default Bio;
