import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import ProfessionalProjectCard from "../../components/professionalProjectCard/ProfessionalProjectCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  professionalProjectsHeader,
  professionalProjects,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const moreProjects = greeting.githubProfile + "?tab=repositories";
class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} onToggle={this.props.onToggle} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {professionalProjectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {professionalProjectsHeader.description}
              </p>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {professionalProjects.data.map((project) => {
            return (
              <ProfessionalProjectCard
                key={project.name}
                project={project}
                theme={theme}
              />
            );
          })}
        </div>

        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                Open Source &amp; Personal Projects
              </h1>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard key={repo.id} repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={moreProjects}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
