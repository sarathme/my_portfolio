import { useState } from "react";
import Section from "../ui/Section";
import SectionNav from "../ui/SectionNav";
import SkillBadge from "../ui/SkillBadge";
import SkillsContainer from "../ui/SkillsContainer";

import uniqid from "uniqid";
const skills = [
  {
    id: uniqid(),
    skillName: "HTML",
    iconId: "html",
    percentage: 70,
    catogary: "frontend",
    known: ["Attributes", "Semantic Elements", "Headings and Hierarchy"],
    familiar: ["Accessibility"],
  },
  {
    id: uniqid(),
    skillName: "CSS",
    iconId: "css",
    percentage: 80,
    catogary: "frontend",
    known: [
      "CSS Custom Properties",
      "Specificity",
      "Box-Model",
      "Combinators",
      "Pseudo-Classes and Elements",
      "CSS Layouts- Grid and Flexbox",
    ],
    familiar: ["Tailwind CSS", "Bootstrap", "CSS Animations"],
  },
  {
    id: uniqid(),
    skillName: "JavaScript",
    iconId: "javascript",
    percentage: 90,
    catogary: "frontend",
    known: [
      "Data-Types",
      "Array methods",
      "Event Handling",
      "DOM Manipulation",
      "Asynchronous Programming",
      "Event Loop",
      "Prototypes",
      "ES Classes",
    ],
    familiar: ["Intersection Observer API", "Closures", "IIFEs"],
  },
  {
    id: uniqid(),
    skillName: "React",
    iconId: "react",
    percentage: 85,
    catogary: "frontend",
    known: [
      "Working with JSX",
      "Props",
      "React Hooks-useState, useEffect, useReducer",
      "React Router",
      "Context API",
    ],
    familiar: [
      "Render Props Pattern",
      "Compound Component Pattern",
      "Custom Hooks",
      "useCallback Hook",
    ],
  },
  {
    id: uniqid(),
    skillName: "Redux",
    iconId: "redux",
    percentage: 50,
    catogary: "frontend",
    known: ["Redux Store", "React Redux", "Redux Tool-kit"],
    familiar: ["Redux Thunk"],
  },
  {
    id: uniqid(),
    skillName: "ReactQuery",
    iconId: "reactquery",
    percentage: 50,
    catogary: "frontend",
    known: ["Querying", "Mutation"],
    familiar: ["Prefetching"],
  },
  {
    id: uniqid(),
    skillName: "MySQL",
    iconId: "mysql",
    percentage: 60,
    catogary: "backend",
    known: [
      "CRUD",
      "Data-types",
      "Primary Keys and Foreign Keys",
      "Joins",
      "Grouping",
    ],
    familiar: ["Views"],
  },
  {
    id: uniqid(),
    skillName: "MongoDB",
    iconId: "mongodb",
    percentage: 70,
    catogary: "backend",
    known: [
      "CRUD",
      "Aggregation Pipeline",
      "Embedding and Referencing Documents ",
    ],
    familiar: [],
  },
  {
    id: uniqid(),
    skillName: "Mongoose",
    iconId: "mongoose",
    percentage: 65,
    catogary: "backend",
    known: [
      "Schema Definition",
      "Model",
      "Middlewares",
      "Populating",
      "Aggregation",
    ],
    familiar: [],
  },
  {
    id: uniqid(),
    skillName: "NodeJS",
    iconId: "node",
    percentage: 60,
    catogary: "backend",
    known: ["Working with NPM Packages", "File System Operations"],
    familiar: [],
  },
  {
    id: uniqid(),
    skillName: "ExpressJS",
    iconId: "express",
    percentage: 70,
    catogary: "backend",
    known: [
      "Routing",
      "Middlewares",
      "Authentication and Authorization",
      "Error Handling",
    ],
    familiar: [],
  },
  {
    id: uniqid(),
    skillName: "Adobe Illustrator",
    iconId: "adobeillustrator",
    percentage: 75,
    catogary: "design",
    known: ["Pen and Curvature Tool", "Shape Builder Tool"],
    familiar: [],
  },
  {
    id: uniqid(),
    skillName: "Figma",
    iconId: "figma",
    percentage: 60,
    catogary: "design",
    known: ["Components and Variants", "Working with Variables"],
    familiar: [],
  },
];

function Skills() {
  const [filteredSkills, setSkills] = useState(() =>
    skills.filter((skill) => skill.catogary === "frontend")
  );
  const navOptions = [
    {
      label: "Frontend",
      value: "frontend",
    },
    {
      label: "Backend",
      value: "backend",
    },
    {
      label: "Design",
      value: "design",
    },
  ];

  function handleFilter(value) {
    setSkills(() => skills.filter((skill) => skill.catogary === value));
  }

  return (
    <Section
      heading="Skills"
      diagonal={false}
      id="skills"
      className="grid-section">
      <SectionNav options={navOptions} handleFilter={handleFilter} />
      <SkillsContainer
        data={filteredSkills}
        render={(skill) => <SkillBadge skill={skill} key={skill.id} />}
      />
    </Section>
  );
}

export default Skills;
