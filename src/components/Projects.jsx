import Section from "../ui/Section";
import SectionNav from "../ui/SectionNav";

import uniqid from "uniqid";

import SliderContainer from "../ui/SliderContainer";
import Slide from "../ui/Slide";
import { useState } from "react";

const projects = [
  {
    id: uniqid(),
    title: "React Library",
    description:
      "Minor project where I built a library web app for managing books and authors in an library",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-sarasraman.appspot.com/o/portfolio-images%2Freact_library.png?alt=media&token=e705ebcc-40b0-45c5-9932-cd5dddab9c35",
    cta: [
      {
        name: "Github",
        url: "https://github.com/sarathme/Day31_React_Library",
      },
      { name: "Preview", url: "https://beamish-sprinkles-182570.netlify.app/" },
    ],
    techStacks: ["ReactJS", "CSS"],
    catogary: "frontend",
    status: [true, "live"],
  },
  {
    id: uniqid(),
    title: "World Wise",
    description:
      "React App to record your visit to places with a short note of the rememberance in that place you have visited.",
    cta: [
      { name: "Github", url: "https://github.com/sarathme/world_wise_react" },
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-sarasraman.appspot.com/o/portfolio-images%2Fworld-wise.png?alt=media&token=69c02a3c-cb49-4eb3-bfc2-65a49ea8f7d4",
    techStacks: ["ReactJS", "React Router DOM", "CSS Modules"],
    catogary: "frontend",
    status: [false, "Not Deployed"],
  },
  {
    id: uniqid(),
    title: "My Portfolio",
    description:
      "Created using ReactJS seems like a overkill for using react for a static webpage but this helped me with converting vanilla frontend code to ReactJS.",
    cta: [{ name: "Github", url: "" }],
    techStacks: ["ReactJS", "React CSS Modules"],
    catogary: "frontend",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-sarasraman.appspot.com/o/portfolio-images%2Fmy_portfolio.png?alt=media&token=0b84c962-43af-4701-b7e7-e34fa147d06a",
    status: [true, "Live"],
  },

  {
    id: uniqid(),
    title: "CMS",
    description:
      "This is React UI for the CMS project which gets data from an API which I also created. Not a feature complete app working on some implementations and responsiveness.",
    cta: [
      { name: "Github", url: "https://github.com/sarathme/CRM-frontend-react" },
      {
        name: "Preview",
        url: "https://incandescent-sprinkles-676e2a.netlify.app/",
      },
    ],
    techStacks: ["ReactJS", "CSS Modules"],
    catogary: "frontend",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-sarasraman.appspot.com/o/portfolio-images%2Fcms.png?alt=media&token=05da8121-5bc2-48e0-9f83-7052ec48c3b9",
    status: [false, "Not Optimized for mobile"],
  },

  {
    id: uniqid(),
    title: "AMS",
    description:
      "Project for my internship period at Walk Horizons. This is to create an API for managing attendance of an organisation.",
    cta: [
      { name: "Github", url: "https://github.com/sarathme/AMS_Project" },
      {
        name: "Postman",
        url: "https://documenter.getpostman.com/view/16657839/2sAYBSktrd",
      },
    ],
    techStacks: ["NodeJS", "ExpressJs", "MongoDB", "Mongoose"],
    catogary: "backend",
    status: [false, "Not Deployed"],
  },
  {
    id: uniqid(),
    title: "CRM Backend",
    description:
      "This is the backend code for my CRM project. Implemented authorization and authentication feature,route handling and error handling",
    cta: [
      { name: "Github", url: "https://github.com/sarathme/CRM-backend-node" },
      {
        name: "Postman",
        url: "https://documenter.getpostman.com/view/16657839/2sAXqy3ze4",
      },
    ],
    techStacks: ["NodeJS", "ExpressJs", "MongoDB", "Mongoose"],
    catogary: "backend",
    status: [true, "Live"],
  },
];

const projectOptions = [
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
];

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(() =>
    projects.filter((project) => project.catogary === "frontend")
  );

  function handleFilter(value) {
    setFilteredProjects(() =>
      projects.filter((project) => project.catogary === value)
    );
  }

  return (
    <Section
      heading="Projects"
      diagonal={true}
      id="projects"
      className="grid-section">
      <SectionNav
        options={projectOptions}
        colorScheme="secondary"
        handleFilter={handleFilter}
      />
      <SliderContainer
        data={filteredProjects}
        render={(project) => <Slide data={project} key={project.id} />}
      />
    </Section>
  );
}

export default Projects;
