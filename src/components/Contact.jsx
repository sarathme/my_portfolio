import Details from "../ui/Details";
import Form from "../ui/Form";
import Section from "../ui/Section";
import SectionNav from "../ui/SectionNav";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <Section
      heading="Contact"
      diagonal={false}
      id="contact"
      className="grid-section">
      <SectionNav options={[{ label: "Contact Me", value: "call" }]} />
      <div className={styles.contact_container}>
        <Details>
          <Form />
        </Details>
      </div>
    </Section>
  );
}

export default Contact;
