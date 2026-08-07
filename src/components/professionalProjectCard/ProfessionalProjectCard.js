import React from "react";
import "./ProfessionalProjectCard.css";
import { Fade } from "react-reveal";

export default function ProfessionalProjectCard({ project, theme }) {
  return (
    <div
      className="repo-card-div professional-project-card"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <p
          className="professional-project-company"
          style={{ color: theme.secondaryText }}
        >
          {project.company}
        </p>
        <p className="repo-name" style={{ color: theme.text }}>
          {project.name}
        </p>
        <p className="repo-description" style={{ color: theme.text }}>
          {project.description}
        </p>
        <div className="professional-project-tech">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="professional-project-tech-tag"
              style={{ color: theme.text, borderColor: theme.text }}
            >
              {tech}
            </span>
          ))}
        </div>
      </Fade>
    </div>
  );
}
