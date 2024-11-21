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
      <SectionNav options={[{ label: "Contact Details", value: "call" }]} />
      <div className={styles.contact_container}>
        <div className={styles.detail}>Detail</div>
        <Form />
      </div>
    </Section>
  );
}

export default Contact;