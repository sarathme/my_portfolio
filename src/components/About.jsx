import { useState } from "react";
import Bio from "../ui/Bio";
import Experience from "../ui/Experience";
import Section from "../ui/Section";
import SectionNav from "../ui/SectionNav";

const aboutOptions = [{ label: "Bio", value: "bio" }];

function About() {
  const [tab, setTab] = useState("bio");
  function handleFilter(value) {
    setTab(value);
  }
  return (
    <Section
      heading="About Me"
      diagonal={true}
      id="about"
      className="grid-section">
      <SectionNav
        options={aboutOptions}
        colorScheme="secondary"
        handleFilter={handleFilter}
      />

      {tab === "bio" && <Bio />}
      {tab === "experience" && <Experience />}
    </Section>
  );
}

export default About;
